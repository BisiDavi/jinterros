import Button from "@/components/button";

export default function LearnmoreView() {
  return (
    <>
      <section className="learnmore w-full flex items-center justify-center">
        <div className="text-content py-44">
          <h1 className="text-center text-5xl font-bold">JINTERROS</h1>
          <hr className="border w-56 bg-brown-light mb-4 mx-auto" />
          <p className="text text-xl text-center  mx-auto">
            Jinterros is a family run business.
            <br /> We worked together to create this magnificent drink so
            everyone across the globe can enjoy it with their loved ones.
          </p>
          <Button
            text="LEARN MORE"
            className="border border-brown-light bg-dark-brown-hover hover:text-white px-20 py-4 flex mx-auto my-24"
          />
        </div>
      </section>
      <style jsx>
        {`
          .learnmore {
            background-image: url("/learn-more-bg.webp");
          }
          .border {
            height: 5px;
          }
        `}
      </style>
    </>
  );
}
