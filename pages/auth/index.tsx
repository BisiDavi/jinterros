import SigninForm from "@/components/form/SigninForm";
import SignupForm from "@/components/form/SignupForm";
import Tabs from "@/components/tab";
import useMediaQuery from "@/hooks/useMediaQuery";
import DefaultLayout from "@/layout/DefaultLayout";

export default function Authpage() {
  const mobileWidth = useMediaQuery("(max-width:768px)");
  return (
    <DefaultLayout title="Signup or Login to Jinterros">
      <section className="auth-page my-32 lg:my-60 lg:flex-row flex-col flex items-center container mx-auto">
        {mobileWidth ? (
          <Tabs
            tabHead={["Sign In", "New To Jinterros"]}
            tab1={<SigninForm />}
            tab2={<SignupForm />}
          />
        ) : (
          <>
            <SigninForm />
            <SignupForm />
          </>
        )}
      </section>
    </DefaultLayout>
  );
}
