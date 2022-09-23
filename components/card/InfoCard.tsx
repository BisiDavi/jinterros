import displayIcons from "@/lib/displayIcons";

interface Props {
  title: string | number;
  text: string;
}

export default function InfoCard({ title, text }: Props) {
  return (
    <div className="shadow rounded-lg h-40 w-2/5 flex items-center">
      <div className="icon bg-orange h-16 w-16 s rounded-full flex items-center justify-center mx-4">
        {displayIcons(text)}
      </div>
      <div className="text">
        <h3 className="text-3xl">{title}</h3>
        <p className="text-xl">{text}</p>
      </div>
    </div>
  );
}
