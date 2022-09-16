import SigninForm from "@/components/form/SigninForm";
import SignupForm from "@/components/form/SignupForm";
import DefaultLayout from "@/layout/DefaultLayout";

export default function Authpage() {
  return (
    <DefaultLayout title="Signup or Login to Jinterros">
      <section className="auth-page my-32 lg:my-60 lg:flex-row flex-col flex items-center container mx-auto">
        <SigninForm />
        <SignupForm />
      </section>
    </DefaultLayout>
  );
}
