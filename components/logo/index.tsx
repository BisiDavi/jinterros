import Image from "next/image";
import Link from "next/link";

interface Props {
  link?: string;
}

export default function Logo({ link }: Props) {
  const logoLink = link ? link : "/";
  return (
    <div>
      <Link href={logoLink}>
        <Image src="/logo.webp" alt="logo" height={255} width={257} />
      </Link>
    </div>
  );
}
