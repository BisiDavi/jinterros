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
import { filterCountries } from "@/lib/formatAdminDBData";

export default function useProductUpload() {
  const { getAuthStatus } = useAuth();
  const authStatus = getAuthStatus();
  const { loadingToast, updateToast } = useToast();
  const toastId = useRef();
  const { writeData } = useFirebase();
  const dispatch = useAppDispatch();
  const { uploadImage } = useMediaUpload();
  const { media } = useAppSelector((state) => state.form);

  const date = new Date();

  async function saveProduct(data: any, methods: any) {
    try {
      loadingToast(toastId);
      const responseData = await uploadImage(media[0]);
      const country = filterCountries(data.country);
      const productData = {
        ...data,
        date,
        country,
        productImage: responseData.data.secure_url,
        author: { name: authStatus?.displayName, email: authStatus?.email },
      };
      const productSlug = toSlug(data.title);
      const stringifyData = JSON.stringify(productData);

      writeData(
        stringifyData,
        `/products/${productSlug}/${authStatus?.uid}`
      ).then(() => {
        dispatch(resetEditable(true));
        dispatch(uploadMedia(null));
        dispatch(uploadPreviewMedia(null));
        methods.reset();
        updateToast(toastId, "success", "Product saved");
      });
    } catch (error) {
      dispatch(uploadMedia(null));
      dispatch(uploadPreviewMedia(null));
      updateToast(toastId, "error", "Error saving Product");
    }
  }
  return {
    saveProduct,
  };
}
