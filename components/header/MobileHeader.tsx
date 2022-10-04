/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";

import Logo from "@/components/logo";
import CartIcon from "@/public/icons/CartIcon";
import Button from "@/components/button";
import MenuIcon from "@/public/icons/MenuIcon";
import MenuCloseIcon from "@/public/icons/MenuCloseIcon";
import useHeader from "@/hooks/useHeader";
import useCart from "@/hooks/useCart";

export default function MobileHeader() {
  const { cartItem, slideCartHandler } = useCart();
  const { onClickHandler, mobileMenu } = useHeader();
  const router = useRouter();

  const logoRoute = router.asPath.includes("/admin") ? "/admin" : "/";

  const buttonIcon = !mobileMenu ? <MenuIcon /> : <MenuCloseIcon />;

  return (
    <header className="bg-white mx-auto py-4  px-8 w-full items-center shadow-xl h-20 justify-between flex fixed top-0 z-50">
      <Button icon={buttonIcon} onClick={onClickHandler} />
      <div className="logo-wrapper-mobile w-1/5 mt-12 fixed">
        <Logo link={logoRoute} />
      </div>
      {!router.asPath.includes("/admin") && (
        <div className="cart-icon flex items-start">
          <Button icon={<CartIcon />} onClick={() => slideCartHandler(true)} />
          {cartItem > 0 && (
            <span className="text-rum-dark-brown font-bold ml-1">
              {cartItem}
            </span>
          )}
        </div>
      )}
    </header>
  );
}
