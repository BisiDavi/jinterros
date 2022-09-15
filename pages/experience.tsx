import ExperienceBanner from "@/components/banner/ExperienceBanner";
import ExperienceSlider from "@/components/slider/ExperienceSlider";
import DefaultLayout from "@/layout/DefaultLayout";

export default function experience() {
  return (
    <DefaultLayout title="Our Experience">
      <ExperienceBanner />
      <ExperienceSlider />
    </DefaultLayout>
  );
}
