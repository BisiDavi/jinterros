import displayIcons from "@/lib/displayIcons";

interface Props {
  title: string | number;
  text: string;
}

export default function InfoCard({ title, text }: Props) {
  return (
    <div className="shadow border rounded-lg h-28 flex my-2 lg:my-0 items-center bg-white hover:bg-gray-100">
      <div className="icon bg-orange h-16 w-16 p-2 rounded-full flex items-center justify-center mx-4">
        {displayIcons(text)}
      </div>
      <div className="text">
        <h3 className="text-3xl">{title}</h3>
        <p className="text-base mt-1">{text}</p>
      </div>
    </div>
  );
}
