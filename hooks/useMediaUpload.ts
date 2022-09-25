import axios from "axios";
import { useRouter } from "next/router";
import { useRef } from "react";

import useToast from "@/hooks/useToast";

export default function useMediaUpload() {
  const toastID = useRef(null);
  const { updateToast, loadingToast } = useToast();
  const router = useRouter();

  function uploadImage(image: any) {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("api_key", `${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}`);
    formData.append("upload_preset", "jinterros");

    return axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData
    );
  }

  function uploadMedia(mediaArray: any[]) {
    loadingToast(toastID);
    [mediaArray].map((mediaItem: Blob | any) => {
      return uploadImage(mediaItem)
        .then((response) => {
          console.log("upload-response", response.data);
          //     dispatch(updateMedia(response.data.secure_url));
          updateToast(toastID, "success", "document upload, successful");
        })
        .catch((err) => {
          console.log("image-upload-err", err);
          return updateToast(toastID, "error", "upload error");
        });
    });
  }

  return { uploadMedia, uploadImage };
}
