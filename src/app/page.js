import Script from "next/script";
import HomePage from "./HomePage";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Onepixelsoft",
  "url": "https://onepixelsoft.com",
  "logo": "https://onepixelsoft.com/onepixel-new/assets/images/logo/onepixel-logo-png-02.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "7737451230",
    "contactType": "sales",
    "areaServed": "IN",
    "availableLanguage": ["en", "Hindi"]
  },
  "sameAs": [
    "https://www.facebook.com/onepixelsoft1",
    "https://twitter.com/onepixel_soft",
    "https://www.instagram.com/onepixel_soft/",
    "https://www.youtube.com/@onepixelsoftpvt.ltd.3613",
    "https://www.linkedin.com/company/one-pixel-soft/",
    "https://id.pinterest.com/pin/the-meeting--650277633683996384/",
    "https://onepixelsoft.com/onepixel-new/index.php"
  ]
}

export const metadata = {
  title: "Best IT & Software Development Company in Jaipur | OnePixel Soft Pvt. Ltd.",
  description: "OnePixel Soft Pvt. Ltd., a trusted IT company in Jaipur, provides custom software development, mobile & web app development, SEO, social media marketing, local SEO, and managed IT services to help businesses grow online.",

};
export default function Home() {
  return (
    <>
      <Script
        id="organization-ld-json"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />

    </>
  );
}
