import { useForm, FormProvider } from "react-hook-form";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "@/components/button";
import { newsletterSchema } from "@/components/form/schema/adminSchema";
import useNewsletterMutation from "@/hooks/useNewsletterMutation";

export default function FooterForm() {
  const methods = useForm({
    mode: "all",
    resolver: yupResolver(newsletterSchema),
  });
  const { mutate } = useNewsletterMutation();
  const {
    formState: { errors },
    register,
  }: any = methods;

  function onSubmit(data: any) {
    mutate(data.email, {
      onSuccess: () => {
        methods.reset();
      },
    });
  }

  return (
    <FormProvider {...methods}>
      <form
        className="my-6 flex flex-col itemx-center justify-center mx-auto"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <h3 className="font-medium text-center lg:text-left my-2">
          SIGN UP FOR JINTERROS NEWSLETTER
        </h3>
        <div className="form-group my-2">
          <div className="form-control flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-white border-0 py-2 px-4 hover:rounded-0 w-3/5"
              {...register("email")}
            />
            <Button
              type="submit"
              className="bg-black text-white font-bold py-2 px-6 w-2/5"
              text="SUBSCRIBE"
            />
          </div>
          <p className="text-red-500 p-0  text-xs">
            {errors["email"]?.message}
          </p>

          <p className="text-xs font-light mt-1">
            By clicking the SUBSCRIBE button, you are agreeing to our
            <Link href="/privacy-and-conditions" passHref>
              <a className="text-underline text-gray-500 ml-1">
                Privacy & Cookie Policy
              </a>
            </Link>
          </p>
        </div>
      </form>
    </FormProvider>
  );
}
