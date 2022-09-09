import HeaderLinks from "@/components/HeaderLinks";
import Logo from "@/components/Logo";
import CartIcon from "@/public/icons/CartIcon";
import UserIcon from "@/public/icons/UserIcon";
import Dropdown from "@/components/Dropdown";
import dropdown from "@/json/dropdown.json";
import Button from "@/components/button";

export default function Header() {
  return (
    <header className="bg-white w-full shadow-2xl fixed top-0 z-50">
      <div className="container mx-auto flex h-20 items-center justify-between relative">
        <HeaderLinks section="left" />
        <div className="w-40 mt-24 z-50">
          <Logo />
        </div>
        <HeaderLinks section="right" />
        <Dropdown options={dropdown.header}>
          <UserIcon />
        </Dropdown>
        <Button href="/cart" icon={<CartIcon />} />
      </div>
    </header>
  );
}
