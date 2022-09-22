import { getAuth } from "firebase/auth";
import { BiLogOut } from "react-icons/bi";

import HeaderLinks from "@/components/header/HeaderLinks";
import Logo from "@/components/Logo";
import CartIcon from "@/public/icons/CartIcon";
import UserIcon from "@/public/icons/UserIcon";
import Dropdown from "@/components/dropdown";
import dropdown from "@/json/dropdown.json";
import Button from "@/components/button";
import { useAppSelector } from "@/hooks/useRedux";
import useFirebase from "@/hooks/useFirebase";
import useAuthMutation from "@/hooks/useAuthMutation";

export default function Header() {
  const { cart } = useAppSelector((state) => state.cart);
  const { initFB } = useFirebase();
  const app = initFB();
  const auth = getAuth(app);
  const { useSignoutMutation } = useAuthMutation();
  const { mutate } = useSignoutMutation();

  const user = auth ? auth?.currentUser?.displayName : null;

  return (
    <header className="bg-white w-full shadow-2xl fixed top-0 z-50 pb-6">
      <nav className="container mx-auto flex h-20 items-center justify-between relative">
        <HeaderLinks section="left" />
        <div className="w-40 mt-24 z-50">
          <Logo />
        </div>
        <HeaderLinks section="right" />
        <Dropdown options={dropdown.header}>
          <UserIcon />
        </Dropdown>
        <div className="cart-icon flex items-start">
          <Button href="/cart" icon={<CartIcon />} />
          {cart > 0 && (
            <span className="text-rum-dark-brown font-bold ml-1">{cart}</span>
          )}
        </div>
        {user && (
          <div className="userview flex absolute items-center -bottom-5 right-0">
            <Button
              icon={<BiLogOut className="text-2xl text-white" />}
              className="mr-3 rounded-full border px-4 bg-dark-brown bg-orange-hover"
              title="Logout"
              onClick={() => mutate({})}
            />
            <p
              className="user-text font-bold text-light-brown"
              title={`Hello, ${user}`}
            >
              Hello, {user}
            </p>
          </div>
        )}
      </nav>
    </header>
  );
}
