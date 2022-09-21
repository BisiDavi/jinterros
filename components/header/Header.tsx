import HeaderLinks from "@/components/header/HeaderLinks";
import Logo from "@/components/Logo";
import CartIcon from "@/public/icons/CartIcon";
import UserIcon from "@/public/icons/UserIcon";
import Dropdown from "@/components/dropdown";
import dropdown from "@/json/dropdown.json";
import Button from "@/components/button";
import { useAppSelector } from "@/hooks/useRedux";

export default function Header() {
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <header className="bg-white w-full shadow-2xl fixed top-0 z-50">
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
      </nav>
    </header>
  );
}
