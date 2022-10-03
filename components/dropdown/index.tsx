/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { PropsWithChildren, useEffect, useState } from "react";

import dropdownContent from "@/json/dropdown.json";
import useAuth from "@/hooks/useAuth";
import useMyOrders from "@/hooks/useMyOrders";

interface Props {
  options: Array<{ link: string; text: string } | null>;
}

export default function Dropdown({
  children,
  options,
}: PropsWithChildren<Props>) {
  const [dropdown, setDropdown] = useState(false);
  const { getAuthStatus } = useAuth();
  const user = getAuthStatus();
  const { orderData } = useMyOrders();

  console.log("orderData", orderData);
  console.log("options", options);

  useEffect(() => {
    if (orderData !== null && orderData.length === 0) {
      options[1] = null;
    } else if (orderData !== null && orderData.length > 0) {
      options[1] = { link: "/order-progress", text: "Track Order" };
    }
  }, [orderData]);

  function onClickHandler() {
    return setDropdown(!dropdown);
  }

  return (
    <div className="flex flex-col relative">
      <button onClick={onClickHandler} type="button" className="flex">
        {children}
      </button>
      {dropdown && (
        <ul className="dropdown mt-14 z-50 shadow bg-white py-2 absolute w-48 left-0">
          <li
            className="font-bold bottom-border-orange text py-1 px-4 hover:bg-gray-400 text-lg"
            onClick={() => setDropdown(false)}
          >
            {!user?.displayName ? (
              <Link href={dropdownContent["top-header"].link}>
                {dropdownContent["top-header"].text}
              </Link>
            ) : (
              <p className="text-sm">Hello, {user.displayName}</p>
            )}
          </li>
          {options.map((option) => (
            <>
              {option && (
                <li
                  key={option.link}
                  className="text-gray-600 text py-1 px-4 hover:bg-gray-400 text-lg"
                  onClick={() => setDropdown(false)}
                >
                  <Link href={option.link}>{option.text}</Link>
                </li>
              )}
            </>
          ))}
        </ul>
      )}
    </div>
  );
}
