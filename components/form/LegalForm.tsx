/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

import Button from "@/components/button";
import { legalSchema } from "@/components/form/schema/legalformSchema";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updateBirthYear } from "@/redux/birth-year-slice";

export default function LegalForm() {
  const dispatch = useAppDispatch();
  const { year } = useAppSelector((state) => state.birth);
  const [, setCookie] = useCookies(["birthYear"]);

  const currentYear = new Date().getFullYear();
  const userAge = currentYear - Number(year);
  const validAge = userAge >= 18 && userAge < 100;

  const methods = useForm({
    resolver: yupResolver(legalSchema),
    mode: "all",
  });
  const {
    register,
    watch,
    formState: { errors },
  }: any = methods;

  const birthYear = watch("birthYear");

  useEffect(() => {
    if (birthYear?.length === 4) {
      dispatch(updateBirthYear(birthYear));
    }
  }, [birthYear]);

  useEffect(() => {
    if (validAge) {
      setCookie("birthYear", JSON.stringify(userAge), {
        path: "/",
        sameSite: true,
      });
    }
  }, [validAge]);

  return (
    <FormProvider {...methods}>
      <form
        className="bg-white rounded-3xl lg:rounded-2xl relative px-8 w-full py-3 mt-20"
        onSubmit={methods.handleSubmit((value) => console.log("value", value))}
      >
        <div className="image-wrapper flex mx-auto items-center justify-center -mt-20">
          <Image src="/logo-small.webp" alt="logo" height={150} width={150} />
        </div>
        <h1 className="text-center font-bold text-xl lg:text-3xl my-2 mt-4">
          PLEASE ENTER YOUR YEAR OF BIRTH
        </h1>
        <input
          placeholder="YYYY"
          max="3"
          defaultValue={year}
          className="text-4xl lg:text-7xl px-2 w-2/5  items-center lg:w-1/4 mx-auto justify-center flex my-4"
          {...register("birthYear")}
        />
        {errors?.birthYear && (
          <p className="text-red-500 text-center -mt-3">
            {errors?.birthYear?.message}
          </p>
        )}
        {!validAge && year.length >= 4 && (
          <p className="text-red-500 text-center">
            Please enter a valid year, you must be above 18 years
          </p>
        )}
        <p className="text-center">
          We use tracking and other cookies
          <span className="underline font-medium ml-1">
            Cookie Policy
          </span> &{" "}
          <span className="underline  font-medium">Privacy Policy</span>
        </p>
        <p className="mt-4 text-center">
          <span className="font-medium">Custom Cookie</span> / Accept All
          Cookies
        </p>
        {validAge && (
          <div className="button-group flex items-center my-8 justify-between px-0">
            <Button
              text="MANAGE"
              className="border border-brown-light my-2 lg:my-0 bg-dark-brown-hover hover:text-white lg:px-20 px-6 py-2 lg:py-4 flex mx-0 lg:mx-auto"
              href="/policies"
            />
            <Button
              text="AGREE"
              className="border hover:opacity-50  my-2 lg:my-0 bg-dark-brown text-white lg:px-20 px-6 py-2 lg:py-4 flex mx-0 lg:mx-auto"
              href="/"
            />
          </div>
        )}
      </form>
    </FormProvider>
  );
}
