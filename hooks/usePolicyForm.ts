import { useRef } from "react";

import useAuth from "@/hooks/useAuth";
import useFirebase from "@/hooks/useFirebase";
import useToast from "@/hooks/useToast";
import toSlug from "@/lib/toSlug";
import { useAppDispatch } from "./useRedux";
import { resetEditable } from "@/redux/form-slice";

export default function usePolicyForm() {
  const { getAuthStatus } = useAuth();
  const authStatus = getAuthStatus();
  const { writeData } = useFirebase();
  const { loadingToast, updateToast } = useToast();
  const toastId = useRef();
  const dispatch = useAppDispatch();

  const date = new Date();

  function savePolicy(data: any, methods: any) {
    const policyData = {
      ...data,
      date,
      author: { name: authStatus?.displayName, email: authStatus?.email },
    };
    loadingToast(toastId);
    const policySlug = toSlug(data.title);
    const stringifyData = JSON.stringify(policyData);

    console.log("policySlug", policySlug);

    writeData(stringifyData, `/policy/${policySlug}/${authStatus?.uid}`)
      .then(() => {
        dispatch(resetEditable(true));
        methods.reset();
        updateToast(toastId, "success", "Policy saved");
      })
      .catch(() => {
        updateToast(toastId, "error", "Error saving Policy");
      });
  }

  return { savePolicy };
}
