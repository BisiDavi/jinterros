import { useRef } from "react";

import useAuth from "@/hooks/useAuth";
import useFirebase from "@/hooks/useFirebase";
import useToast from "@/hooks/useToast";
import toSlug from "@/lib/toSlug";
import { useAppDispatch } from "@/hooks/useRedux";
import { resetEditable } from "@/redux/form-slice";

export default function useCocktail() {
  const { getAuthStatus } = useAuth();
  const authStatus = getAuthStatus();
  const { loadingToast, updateToast } = useToast();
  const toastId = useRef();
  const { writeData } = useFirebase();
  const dispatch = useAppDispatch();

  const date = new Date();

  function saveCocktail(data: any, methods: any) {
    const cocktailData = {
      ...data,
      date,
      author: { name: authStatus?.displayName, email: authStatus?.email },
    };
    loadingToast(toastId);
    const cocktailSlug = toSlug(data.title);
    const stringifyData = JSON.stringify(cocktailData);

    writeData(stringifyData, `/policy/${cocktailSlug}/${authStatus?.uid}`)
      .then(() => {
        dispatch(resetEditable(true));
        methods.reset();
        updateToast(toastId, "success", "Policy saved");
      })
      .catch(() => {
        updateToast(toastId, "error", "Error saving Policy");
      });
  }
  return {
    saveCocktail,
  };
}
