import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

import useRequestMutation from "@/hooks/useRequestMutation";
import useAuth from "@/hooks/useAuth";

export default function useAuthMutation() {
  const { authSignup, authSignIn, authSignOut } = useAuth();
  const router = useRouter();
  const [, , removeCookie] = useCookies();

  function useSignupMutation() {
    return useRequestMutation(
      ({ userData, password }) => authSignup(userData, password),
      {
        mutationKey: ["useSignupMutation"],
        success: "Sign up Successful",
        error: "Sign up error",
        onSuccessMethodWithData: (data) => {
          console.log("data-onSuccessMethodWithData", data);
          if (!router.asPath.includes("/admin")) {
            router.push("/");
          }
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
          if (!router.asPath.includes("/admin")) {
            router.push("/");
          }
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
        if (router.asPath.includes("/admin")) {
          removeCookie("admin", {
            path: "/",
            sameSite: true,
          });
        }
        if (!router.asPath.includes("/admin")) {
          router.push("/");
        }
      },
    });
  }

  return { useSignupMutation, useSigninMutation, useSignoutMutation };
}
