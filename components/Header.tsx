import HeaderLinks from "@/components/HeaderLinks";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="bg-white w-full shadow">
      <div className="container mx-auto flex h-20 items-center justify-between relative">
        <HeaderLinks section="left" />
        <div className="w-52 mt-36 z-50">
          <Logo />
        </div>
        <HeaderLinks section="right" />
      </div>
    </header>
  );
}
