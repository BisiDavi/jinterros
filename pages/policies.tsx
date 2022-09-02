import Image from "next/image";

import Button from "@/components/button";
import FormLayout from "@/layout/FormLayout";

export default function Policies() {
  return (
    <FormLayout>
      <div className="content h-96">
        <h4 className="text-white text-center font-bold">
          YOU MUST BE OF LEGAL AGE FOR PURCHASING <br /> AND CONSUMING ALCOHOL
          TO ENTER THIS SITE
        </h4>
        <div className="policy-view bg-white h-96 p-5 mt-4">
          <div className="header pb-3 border-b flex ">
            <div className="w-1/3">
              <Image
                src="/onetrust.webp"
                alt="one trust logo"
                height={40}
                width={150}
              />
            </div>
            <div className="w-2/3">
              {" "}
              <h3 className="text-2xl text-left font-bold text-gray-600">
                Privacy Preference Center
              </h3>
            </div>
          </div>
        </div>
        <div className="policy-content">
          <div className="w-1/3">
            
          </div>
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
        <div className="footer h-10 bg-gray flex items-center justify-end px-4">
          <Image
            src="/PoweredByOneTrust.webp"
            alt="Powered by OneTrust"
            height={15}
            width={120}
          />
        </div>
      </div>
    </FormLayout>
  );
}
