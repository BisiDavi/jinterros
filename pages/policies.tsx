import Image from "next/image";
import { useRouter } from "next/router";

import Button from "@/components/button";
import FormLayout from "@/layout/FormLayout";
import policiesContent from "@/json/policies.json";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updatePolicies } from "@/redux/ui-slice";

import type { policiesStateType } from "@/types/redux-types";
import toSlug from "@/lib/toSlug";

type listItemType = {
  title: policiesStateType;
  text: string;
};

export default function Policies() {
  const dispatch = useAppDispatch();
  const { policies } = useAppSelector((state) => state.UI);
  const router = useRouter();
  const policy = policiesContent.filter(
    (item) => toSlug(item.title) === policies
  )[0];

  function changePolicyHandler(policyKey: string) {
    const TpolicyKey: policiesStateType | any = toSlug(policyKey);
    router.query.section = toSlug(policyKey);
    router.push(router);
    dispatch(updatePolicies(TpolicyKey));
  }

  return (
    <FormLayout>
      <div className="content ">
        <h4 className="text-white text-center font-bold">
          YOU MUST BE OF LEGAL AGE FOR PURCHASING <br /> AND CONSUMING ALCOHOL
          TO ENTER THIS SITE
        </h4>
        <div className="policy-view bg-white  p-5 mt-4">
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
          <div className="policy-content h-72 flex">
            <ul className="w-1/3">
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
            <div className="w-2/3 px-6 py-2">
              <h4 className="font-medium my-2 text-xl text-gray-600">
                {policy.title}
              </h4>
              <p className="text-sm text-gray-600">{policy.text}</p>
            </div>
          </div>
          <div className="buttonGroup flex justify-between my-4 h-16  pt-12 border-t items-center">
            <Button
              text="Confirm Choices"
              className="bg-leaf-green px-6 py-2 text-white font-bold h-12 w-1/4 hover:opacity-80"
            />
            <Button
              text="Allow All"
              className="bg-leaf-green px-6 py-2 text-white font-bold h-12 w-1/4 hover:opacity-80"
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
