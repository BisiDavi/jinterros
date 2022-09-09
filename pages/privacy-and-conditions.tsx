import DefaultLayout from "@/layout/DefaultLayout";

import privacyContent from "@/json/privacy-and-condition.json";

export default function PrivacyAndConditionsPage() {
  return (
    <DefaultLayout title="privacy-and-conditions">
      <section className="mt-52 mb-32 container mx-auto">
        {privacyContent.map((item, index) => (
          <div className="policies my-10" key={index}>
            <h1 className="mb-20 text-3xl font-semibold text-center">
              {item.title}
            </h1>
            <ul>
              {item.section.map((itemText, idx) => (
                <li className="my-4" key={idx}>
                  <p className="mt-4 text-xl font-semibold">{itemText.title}</p>
                  <p className="mt-4">{itemText?.text1}</p>
                  <p className="mt-1">{itemText.text}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="copyright mt-20">
          © 2022 All rights reserved. Version 8 dated June 2022.
        </p>
      </section>
    </DefaultLayout>
  );
}
