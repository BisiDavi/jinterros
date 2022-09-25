import { useRef } from "react";

import useAuth from "@/hooks/useAuth";
import useFirebase from "@/hooks/useFirebase";
import useToast from "@/hooks/useToast";
import toSlug from "@/lib/toSlug";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import {
  resetEditable,
  uploadMedia,
  uploadPreviewMedia,
} from "@/redux/form-slice";
import useMediaUpload from "@/hooks/useMediaUpload";

export default function useCocktail() {
  const { getAuthStatus } = useAuth();
  const authStatus = getAuthStatus();
  const { loadingToast, updateToast } = useToast();
  const toastId = useRef();
  const { writeData } = useFirebase();
  const dispatch = useAppDispatch();
  const { uploadImage } = useMediaUpload();
  const { media } = useAppSelector((state) => state.form);

  const date = new Date();

  async function saveCocktail(data: any, methods: any) {
    try {
      loadingToast(toastId);
      const responseData = await uploadImage(media[0]);
      const cocktailData = {
        ...data,
        date,
        cocktailImage: responseData.data.secure_url,
        author: { name: authStatus?.displayName, email: authStatus?.email },
      };
      const cocktailSlug = toSlug(data.title);
      const stringifyData = JSON.stringify(cocktailData);

      console.log("cocktailData", cocktailData);

      writeData(stringifyData, `/cocktail/${cocktailSlug}/${authStatus?.uid}`)
        .then(() => {
          dispatch(resetEditable(true));
          dispatch(uploadMedia(null));
          dispatch(uploadPreviewMedia(null));
          methods.reset();
          updateToast(toastId, "success", "Cocktail saved");
        })
        .catch((error) => {
          console.log("error", error);
          dispatch(uploadMedia(null));
          dispatch(uploadPreviewMedia(null));
          updateToast(toastId, "error", "Error saving Cocktail");
        });
    } catch (error) {
      console.log("error", error);
      dispatch(uploadMedia(null));
      dispatch(uploadPreviewMedia(null));
      updateToast(toastId, "error", "Error saving Cocktail");
    }
  }
  return {
    saveCocktail,
  };
}
