import Link from "next/link";

import ButtonSpinner from "@/components/loader/ButtonSpinner";

interface Props {
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  text?: string;
  icon?: JSX.Element;
  disabled?: boolean;
  loading?: boolean;
  title?: string;
  href?: string;
}

export default function Button({
  className,
  onClick,
  type,
  text,
  icon,
  disabled,
  title,
  loading,
  href,
}: Props) {
  const buttonType = type ? type : "button";
  return (
    <>
      {href ? (
        <Link href={href}>
          <span className={className} title={title}>
            {icon} {text}
          </span>
        </Link>
      ) : (
        <button
          title={title}
          className={className}
          onClick={onClick}
          type={buttonType}
          disabled={disabled}
        >
          {loading && <ButtonSpinner />} {icon} {!loading && text}
        </button>
      )}
      <style jsx>
        {`
          button {
            transition: 0.5s;
          }
        `}
      </style>
    </>
  );
}
