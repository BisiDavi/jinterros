import { useRef } from "react";

import useAuth from "@/hooks/useAuth";
import useFirebase from "@/hooks/useFirebase";
import useToast from "@/hooks/useToast";
import toSlug from "@/lib/toSlug";
import { useAppDispatch } from "@/hooks/useRedux";
import { resetEditable } from "@/redux/form-slice";
import useMediaUpload from "./useMediaUpload";

export default function useCocktail() {
  const { getAuthStatus } = useAuth();
  const authStatus = getAuthStatus();
  const { loadingToast, updateToast } = useToast();
  const toastId = useRef();
  const { writeData } = useFirebase();
  const dispatch = useAppDispatch();
  const { uploadImage } = useMediaUpload();

  const date = new Date();

  async function saveCocktail(data: any, methods: any) {
    try {
      const responseData = await uploadImage(data.cocktailImage);
      const cocktailData = {
        ...data,
        date,
        cocktailImage: responseData.data.secure_url,
        author: { name: authStatus?.displayName, email: authStatus?.email },
      };
      loadingToast(toastId);
      const cocktailSlug = toSlug(data.title);
      const stringifyData = JSON.stringify(cocktailData);

      writeData(
        stringifyData,
        `/cocktail/${cocktailSlug}/${authStatus?.uid}`
      ).then(() => {
        dispatch(resetEditable(true));
        methods.reset();
        updateToast(toastId, "success", "Cocktail saved");
      });
    } catch (error) {
      console.log("error");
      updateToast(toastId, "error", "Error saving Cocktail");
    }
  }
  return {
    saveCocktail,
  };
}
