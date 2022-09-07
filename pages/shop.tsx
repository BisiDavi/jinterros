import DefaultLayout from "@/layout/DefaultLayout";

export default function shop() {
  return (
    <DefaultLayout title="Shop">
      <div className="content mt-52">
        <h4 className="text-center text-xl font-bold">
          “A party is best enjoyed with a circle of friends and a bottle of
          rum.”
        </h4>
        <div className="shop-view"></div>
      </div>
    </DefaultLayout>
  );
}
