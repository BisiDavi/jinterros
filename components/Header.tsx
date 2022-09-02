import HeaderLinks from "@/components/HeaderLinks";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="bg-white w-full">
      <div className="container mx-auto">
        <HeaderLinks section="left" />
        <Logo />
        <HeaderLinks section="right" />
      </div>
    </header>
  );
}
