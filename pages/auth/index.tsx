import SigninForm from "@/components/form/SigninForm";
import SignupForm from "@/components/form/SignupForm";
import DefaultLayout from "@/layout/DefaultLayout";

export default function Authpage() {
  return (
    <DefaultLayout title="Signup or Login to Jinterros">
      <section className="auth-page my-60 flex items-center container mx-auto">
        <SigninForm />
        <SignupForm />
      </section>
    </DefaultLayout>
  );
}
 