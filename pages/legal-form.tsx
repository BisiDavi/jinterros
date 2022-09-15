import FormLayout from "@/layout/FormLayout";
import LegalForm from "@/components/form/LegalForm";

export default function LegalFormPage() {
  return (
    <FormLayout>
      <div className="content">
        <h4 className="font-bold text-center text-white mt-4">
          YOU MUST BE OF LEGAL AGE FOR PURCHASING <br /> AND CONSUMING ALCOHOL
          TO ENTER THIS SITE
        </h4>
        <LegalForm />
        <p className="text-white text-center font-bold text-xs my-4">
          I accept the <span className="underline">Terms and Conditions</span>{" "}
        </p>

        <p className="text-white text-center font-bold text-xs my-4">
          <span className="mt-4">LIVE PASSIONATELY.DRINK RESPONSIBLY. </span>
          <br />
          For information about Alcohol Responsibility visit
          <span className="underline ml-1">responsibledrinking.org </span>
          <p className="text-white text-center font-bold text-xs my-4">
            © 2022 JINTERROS, FAMILY COMPANY. EACH RUM 40% ALC. BY VOL.
          </p>
        </p>
        <p className="underline text-white text-center font-bold text-xs mt-2">
          JINTERROS information
        </p>
      </div>
    </FormLayout>
  );
}
