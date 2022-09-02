import Link from "next/link";

import links from "@/json/links.json";

export default function Footer() {
  return (
    <>
      <footer className="bg-carton-brown footer w-full">
        <div className="layer-1 w-full py-20">
          <div className="container mx-auto flex justify-between">
            <div className="w-1/2 left-pane">
              <div className="links-group grid grid-cols-3">
                {links.footer.map((footerItem) => (
                  <ul key={footerItem.title}>
                    <h5 className="text-lg font-medium mb-3">
                      {footerItem.title}
                    </h5>
                    {footerItem.group.map((groupItem) => (
                      <li key={groupItem.link} className="my-2">
                        <Link href={groupItem.link}>
                          <a className="font-light">{groupItem.text}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
              <div className="bottom-content mt-32">
                <p className="mb-4 text-xs">Copyright 2022 | Jinterros</p>
                <ul className="flex items-center">
                  {links.others.map((linkItem, index) => {
                    const showBorder =
                      Number(links.others.length - 1) !== index ? "|" : "";
                    return (
                      <li key={linkItem.link}>
                        <Link href={linkItem.link}>
                          <>
                            <a className="underline hover:text-red-500 text-xs">
                              {linkItem.text}
                            </a>{" "}
                            <span className="mr-1">{showBorder}</span>
                          </>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="w-1/2 right-pane items-right">
              <h5 className="text-lg font-medium mb-3">FIND US</h5>
              <ul className="flex">
                {links.socials.map((social, index) => {
                  const showBorder =
                    Number(links.socials.length - 1) !== index ? "|" : "";
                  return (
                    <li key={social.text}>
                      <a className="font-light">
                        {social.text}
                        <span className="mx-2">{showBorder}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer {
            background-image: url("/flower.webp");
            background-repeat: no-repeat;
            background-position: left;
          }
          .layer-1 {
            background-image: url("/beer.webp");
            background-repeat: no-repeat;
            background-position: right;
          }
        `}
      </style>
    </>
  );
}
