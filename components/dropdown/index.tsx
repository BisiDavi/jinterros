import Link from "next/link";
import { PropsWithChildren, useState } from "react";

interface Props {
  options: Array<{ link: string; text: string }>;
}

export default function Dropdown({
  children,
  options,
}: PropsWithChildren<Props>) {
  const [dropdown, setDropdown] = useState(false);

  function onClickHandler() {
    setDropdown(!dropdown);
  }

  return (
    <div className="flex flex-col relative">
      <button onClick={onClickHandler} type="button" className="flex">
        {children}
      </button>
      {dropdown && (
        <ul className="dropdown mt-14 shadow bg-white py-2 absolute w-48 left-0">
          {options.map((option, index) => {
            const className =
              index === 0 ? "font-bold bottom-border-orange" : "text-gray-600";
            return (
              <li
                key={option.link}
                className={`${className} text py-1 px-4 hover:bg-gray-400 text-lg`}
                onClick={() => setDropdown(false)}
              >
                {option.link ? (
                  <Link href={option.link}>{option.text}</Link>
                ) : (
                  option.text
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
