/* eslint-disable @next/next/no-img-element */
import Logo from "@/components/Logo";
import { useAppSelector } from "@/hooks/useRedux";
import CartIcon from "@/public/icons/CartIcon";
import Button from "@/components/button";

export default function MobileHeader() {
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <header className="bg-white w-full shadow-2xl justify-between flex  fixed top-0 z-50">
      <img src="/hamburger.png" alt="mobile-icon" />
      <Logo />
      <div className="cart-icon flex items-start">
        <Button href="/cart" icon={<CartIcon />} />
        <span className="text-rum-dark-brown font-bold ml-1">{cart}</span>
      </div>
    </header>
  );
}
