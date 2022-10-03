export default function Metatag() {
  return (
    <>
      {/* OG meta */}
      <meta
        property="og:site_name"
        content="Jinterros Rum with Natural Flavours"
      />
      <meta property="og:url" content="https://www.jinterros.com/" />
      <meta property="og:title" content="Jinterros Rum with Natural Flavours" />
      <meta property="og:type" content="website" />
      <meta
        name="description"
        content="Buy Jinterros Rum a premium rum which is blend of exclusive rum aged for up to 3-8 years. Jinterros Rum has an aroma of sugarcane, coconut and small hits of mango which will want you want more."
      />
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="1000" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/verrb-inc/image/upload/v1664279841/jinterros/logo-small_fqzhct.webp"
      />

      {/* Twitter meta */}
      <meta name="twitter:site" content="@https://www.jinterros.com" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://www.jinterros.com" />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/verrb-inc/image/upload/v1664279841/jinterros/logo-small_fqzhct.webp"
      />
      <meta
        name="twitter:description"
        content="Buy Jinterros Rum a premium rum which is blend of exclusive rum aged for up to 3-8 years. Jinterros Rum has an aroma of sugarcane, coconut and small hits of mango which will want you want more."
      />
      <meta
        name="twitter:title"
        content="Jinterros Rum with Natural Flavours"
      />
      <script type="application/ld+json">
        {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "url":"https://www.jinterros.com/",
            "content":"https://res.cloudinary.com/verrb-inc/image/upload/v1664279841/jinterros/logo-small_fqzhct.webp"
          }`}
      </script>
      <script type="application/ld+json">
        {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "url":"https://www.jinterros.com/",
            "logo": "https://res.cloudinary.com/verrb-inc/image/upload/v1664279841/jinterros/logo-small_fqzhct.webp"
          }`}
      </script>
    </>
  );
}
