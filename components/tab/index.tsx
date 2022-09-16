import { useState } from "react";

interface Props {
  tabHead: string[];
  tab1: JSX.Element;
  tab2: JSX.Element;
}

export default function Tabs({ tab1, tab2, tabHead }: Props) {
  const [tab, setTab] = useState(0);

  function updateTabHandler(tabValue: number) {
    setTab(tabValue);
  }

  return (
    <div className="w-full">
      <ul className="head flex container shadow text-xl items-center mx-auto justify-center">
        {tabHead.map((item, index) => {
          const activeTab =
            tab === index ? "text-orange input-border-b-light " : "text-gray";
          return (
            <li
              key={item}
              className={`w-1/2 flex items-center justify-center pb-2 font-bold ${activeTab}`}
              onClick={() => updateTabHandler(index)}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div className="body">{tab === 0 ? tab1 : tab2}</div>
    </div>
  );
}
