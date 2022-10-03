import { v4 as uuidv4 } from "uuid";

import useRequestMutation from "@/hooks/useRequestMutation";
import useFirebase from "@/hooks/useFirebase";

export default function useNewsletterMutation() {
  const { writeData } = useFirebase();

  function newsletterSubscription(email: string) {
    const date = new Date();
    const data = {
      email,
      date,
    };
    return writeData(JSON.stringify(data), `/newsletter/${uuidv4()}/`);
  }

  return useRequestMutation((email) => newsletterSubscription(email), {
    mutationKey: ["useNewsletterMutation"],
    success: "Newsletter subscription successful",
    error: "Newsletter subscription error",
  });
}
