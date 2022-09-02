import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <a>
          <Image src="/logo.webp" alt="logo" />
        </a>
      </Link>
    </div>
  );
}
