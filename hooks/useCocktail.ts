import { useRef } from "react";

import useAuth from "@/hooks/useAuth";
import useFirebase from "@/hooks/useFirebase";
import useToast from "@/hooks/useToast";
import toSlug from "@/lib/toSlug";
import { useAppDispatch } from "@/hooks/useRedux";
import { resetEditable, uploadMedia } from "@/redux/form-slice";

export default function useCocktail() {
  const { getAuthStatus } = useAuth();
  const authStatus = getAuthStatus();
  const { loadingToast, updateToast } = useToast();
  const toastId = useRef();
  const { writeData } = useFirebase();
  const dispatch = useAppDispatch();

  const date = new Date();

  function saveCocktail(data: any, methods: any, mediaName: string) {
    try {
      loadingToast(toastId);
      dispatch(uploadMedia(mediaName));
      if (data.cocktailImage) {
        const cocktailData = {
          ...data,
          date,
          author: { name: authStatus?.displayName, email: authStatus?.email },
        };
        const cocktailSlug = toSlug(data.title);
        const stringifyData = JSON.stringify(cocktailData);

        console.log("data", data);

        writeData(
          stringifyData,
          `/cocktail/${cocktailSlug}/${authStatus?.uid}`
        ).then(() => {
          dispatch(resetEditable(true));
          dispatch(uploadMedia(null));
          methods.reset();
          updateToast(toastId, "success", "Cocktail saved");
        });
      } else {
        updateToast(toastId, "error", "Error saving Cocktail");
        dispatch(uploadMedia(null));
        throw new Error("error uploading image");
      }
    } catch (error) {
      console.log("error", error);
      dispatch(uploadMedia(null));
      updateToast(toastId, "error", "Error saving Cocktail");
    }
  }
  return {
    saveCocktail,
  };
}
