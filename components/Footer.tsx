import Link from "next/link";

import links from "@/json/links.json";

export default function Footer() {
  return (
    <>
      <footer className="bg-carton-brown footer w-full">
        <div className="layer-1 w-full h-96 py-8">
          <div className="container mx-auto">
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
                          <a>{groupItem.text}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
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
