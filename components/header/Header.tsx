import { BiLogOut } from "react-icons/bi";

import HeaderLinks from "@/components/header/HeaderLinks";
import Logo from "@/components/Logo";
import CartIcon from "@/public/icons/CartIcon";
import UserIcon from "@/public/icons/UserIcon";
import Dropdown from "@/components/dropdown";
import dropdown from "@/json/dropdown.json";
import Button from "@/components/button";
import useAuthMutation from "@/hooks/useAuthMutation";
import useAuth from "@/hooks/useAuth";
import useCart from "@/hooks/useCart";

export default function Header() {
  const { slideCartHandler, cartItem } = useCart();
  const { getAuthStatus } = useAuth();
  const { useSignoutMutation } = useAuthMutation();
  const { mutate } = useSignoutMutation();

  const user = getAuthStatus();
  const headerClassName = user ? "pb-6" : "";

  return (
    <header
      className={`bg-white w-full shadow-2xl fixed top-0 z-50 ${headerClassName}`}
    >
      <nav className="container 2xl:px-20  mx-auto flex h-20 items-center justify-between relative">
        <HeaderLinks section="left" />
        <div className="w-40 mt-24 z-50">
          <Logo />
        </div>
        <HeaderLinks section="right" />
        <Dropdown options={dropdown.header}>
          <UserIcon />
        </Dropdown>
        <div className="cart-icon flex items-start">
          <Button icon={<CartIcon />} onClick={() => slideCartHandler(true)} />
          {cartItem > 0 && (
            <span className="text-rum-dark-brown font-bold ml-1">
              {cartItem}
            </span>
          )}
        </div>
        {user?.displayName && (
          <div className="userview 2xl:mr-10 flex absolute items-center -bottom-5 right-0">
            <Button
              icon={<BiLogOut className="text-2xl text-white" />}
              className="mr-3 rounded-full border px-4 bg-dark-brown bg-orange-hover"
              title="Logout"
              onClick={() => mutate({})}
            />
            <p
              className="user-text font-bold text-light-brown"
              title={`Hello, ${user.displayName}`}
            >
              Hello, {user.displayName}
            </p>
          </div>
        )}
      </nav>
    </header>
  );
}
