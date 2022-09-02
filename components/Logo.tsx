import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <a>
          <Image src="/logo.webp" alt="logo" height={255} width={257} />
        </a>
      </Link>
    </div>
  );
}
