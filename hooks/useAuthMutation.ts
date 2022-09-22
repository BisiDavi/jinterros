import useRequestMutation from "@/hooks/useRequestMutation";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";

export default function useAuthMutation() {
  const { authSignup, authSignIn, authSignOut } = useAuth();
  const router = useRouter();

  function useSignupMutation() {
    return useRequestMutation(
      ({ userData, password }) => authSignup(userData, password),
      {
        mutationKey: ["useSignupMutation"],
        success: "Sign up Successful",
        error: "Sign up error",
        onSuccessMethodWithData: (data) => {
          console.log("data-onSuccessMethodWithData", data);
          router.back();
        },
      }
    );
  }

  function useSigninMutation() {
    return useRequestMutation(
      ({ email, password }) => authSignIn(email, password),
      {
        mutationKey: ["useSigninMutation"],
        success: "Sign in successful",
        error: "oops, an error occured",
        onSuccessMethodWithData: (data) => {
          console.log("data", data);
          router.back();
        },
      }
    );
  }

  function useSignoutMutation() {
    return useRequestMutation(authSignOut, {
      mutationKey: ["useSignoutMutation"],
      success: "logout successful",
      error: "oops, an error occured",
      onSuccessMethodWithData: (data) => {
        router.back();
      },
    });
  }

  return { useSignupMutation, useSigninMutation, useSignoutMutation };
}
