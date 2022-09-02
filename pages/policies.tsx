import Button from "@/components/button";
import FormLayout from "@/layout/FormLayout";

export default function Policies() {
  return (
    <FormLayout>
      <div className="content h-96">
        <h4 className="text-white text-center">
          YOU MUST BE OF LEGAL AGE FOR PURCHASING <br /> AND CONSUMING ALCOHOL
          TO ENTER THIS SITE
        </h4>
        <div className="policy-view bg-white h-96 p-5">
          <div className="header h-32 border-b">
            <div className="w-1/3">
              <h3>OneTrust</h3>
              <p>PRIVACY, SECURITY & GOVERNANCE</p>
            </div>
            <div className="w-2/3">
              {" "}
              <h3>Privacy Preference Center</h3>
            </div>
          </div>
          <div className="policy-content">
            <div className="w-1/3"></div>
            <div className="w-2/3"></div>
          </div>
          <div className="buttonGroup flex justify-between my-4">
            <Button
              text="Confirm Choices"
              className="bg-leaf-green px-6 py-2 text-white font-bold"
            />
            <Button
              text="Allow All"
              className="bg-leaf-green px-6 py-2 text-white font-bold"
            />
          </div>
          <div className="footer h-12">
            <p>
              Powered by <span>OneTrust</span>
            </p>
          </div>
        </div>
      </div>
    </FormLayout>
  );
}
