/* eslint-disable @next/next/no-img-element */
import experienceContent from "@/json/experience.json";

export default function ExperienceBanner() {
  return (
    <section className="experience-banner">
      <img src="/bottles-rum-flower.webp" alt="experience" />
      <ul className="text-content my-6 lg:my-16 w-5/6 lg:w-2/3 flex flex-col justify-center mx-auto">
        {experienceContent.map((item) => (
          <li key={item.title} className="my-4">
            <h4 className="font-bold text-xl text-tan">{item.title}</h4>
            <p className="text-dark-brown font-light">{item.text}</p>
            {item.text1 && (
              <p className="mt-4 text-dark-brown font-light">{item.text1}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
