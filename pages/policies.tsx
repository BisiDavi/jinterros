import Image from "next/image";

import Button from "@/components/button";
import FormLayout from "@/layout/FormLayout";
import policiesContent from "@/json/policies.json";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updatePolicies } from "@/redux/ui-slice";
import toSlug from "@/lib/toSlug";

import type { policiesStateType } from "@/types/redux-types";

export default function Policies() {
  const dispatch = useAppDispatch();
  const { policies } = useAppSelector((state) => state.UI);
  const policy = policiesContent.filter(
    (item) => toSlug(item.title) === policies
  )[0];

  function changePolicyHandler(policyKey: string) {
    const TpolicyKey: policiesStateType | any = toSlug(policyKey);
    dispatch(updatePolicies(TpolicyKey));
  }

  return (
    <FormLayout>
      <div className="content">
        <h4 className="text-white text-center font-bold">
          YOU MUST BE OF LEGAL AGE FOR PURCHASING <br /> AND CONSUMING ALCOHOL
          TO ENTER THIS SITE
        </h4>
        <div className="policy-view bg-white  p-5 mt-4">
          <div className="header pb-3 items-center justify-between border-b flex ">
            <div className="w-1/4 lg:w-1/3">
              <Image
                src="/onetrust.webp"
                alt="one trust logo"
                height={40}
                width={150}
              />
            </div>
            <div className="w-2/3">
              <h3 className="lg:text-2xl text-left font-bold text-gray-600">
                Privacy Preference Center
              </h3>
            </div>
          </div>
          <div className="policy-content lg:h-72 flex lg:flex-row flex-col">
            <ul className="lg:w-1/3 order-2 lg:order-1 w-full">
              {policiesContent.map((listItem) => {
                const activePolicy =
                  toSlug(listItem.title) === policies
                    ? "border-width-medium border-leaf-green bg-white"
                    : "border-b bg-gray-100";
                return (
                  <li
                    key={listItem.title}
                    className={`h-12 flex items-center   px-4 justify-center hover:bg-gray-200 ${activePolicy}`}
                  >
                    <Button
                      text={listItem.title}
                      className="h-full w-full"
                      onClick={() => changePolicyHandler(listItem.title)}
                    />
                  </li>
                );
              })}
            </ul>
            <div className="w-full h-60 lg:order-2 lg:h-auto overflow-y-scroll lg:w-2/3 lg:px-6 py-2">
              <h4 className="font-medium my-2 text-md lg:text-xl text-gray-600">
                {policy.title}
              </h4>
              <p className="text-sm text-gray-600">{policy.text}</p>
            </div>
          </div>
          <div className="buttonGroup flex justify-between my-4 h-16  pt-12 border-t items-center">
            <Button
              text="Confirm Choices"
              className="bg-leaf-green lg:px-6 py-2 text-white font-bold h-12 w-2/5 text-sm lg:w-1/4 lg:text-base hover:opacity-80 flex items-center justify-center"
            />
            <Button
              text="Allow All"
              className="bg-leaf-green flex items-center justify-center lg:px-6 py-2 w-2/5 text-white text-sm lg:text-base font-bold h-12 lg:w-1/4 hover:opacity-80"
              href="/"
            />
          </div>
        </div>
        <div className="footer h-10 bg-gray flex items-center justify-end px-4">
          <Image
            src="/PoweredByOneTrust.webp"
            alt="Powered by OneTrust"
            height={14}
            width={120}
          />
        </div>
      </div>
    </FormLayout>
  );
}
