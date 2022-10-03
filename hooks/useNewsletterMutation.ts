import { v4 as uuidv4 } from "uuid";

import useRequestMutation from "@/hooks/useRequestMutation";
import useFirebase from "@/hooks/useFirebase";

export default function useNewsletterMutation() {
  const { writeData } = useFirebase();

  function newsletterSubscription(email: string) {
    return writeData(JSON.stringify(email), `/newsletter/${uuidv4()}/`);
  }

  return useRequestMutation((email) => newsletterSubscription(email), {
    mutationKey: ["useNewsletterMutation"],
    success: "Newsletter subscription successful",
    error: "Newsletter subscription error",
  });
}
