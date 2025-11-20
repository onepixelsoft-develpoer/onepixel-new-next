import { Inter } from "next/font/google";
import "../styles/global.css";
import "../styles/modules/Animate.css";
import "../styles/modules/commen.css";
import "../styles/modules/About.css";
import Script from "next/script";
import Topbar from "@/components/layout/Topbar/Topbar";
import Header from "@/components/layout/Header";
import ClientWrapper from "@/components/ClientWrapper/ClientWrapper";
import BackToTop from "@/Commen-components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

// ⬇⬇ ADD THIS: SEO + OpenGraph + Twitter Meta Tags
export const metadata = {
  title: "Top IT & Software Company in Jaipur – OnePixel Soft",
  description:
    "OnePixel Soft Pvt. Ltd. provides software development, mobile apps, websites, SEO, SMM, local SEO and IT services to help businesses grow online.",
  
  openGraph: {
    title: "Top IT & Software Company in Jaipur – OnePixel Soft",
    description:
      "OnePixel Soft Pvt. Ltd. provides software development, mobile apps, websites, SEO, SMM, local SEO and IT services.",
    url: "https://yourwebsite.com",
    siteName: "OnePixel Soft",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Top IT & Software Company in Jaipur – OnePixel Soft",
    description:
      "OnePixel Soft Pvt. Ltd. – Software & IT Development Company in Jaipur.",
    images: ["https://yourwebsite.com/og-image.jpg"],
  },
};




// ----------------------------------------------------

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
      </head>

      <body className={inter.className}>
        <Topbar />
        <Header />
        <ClientWrapper>{children}</ClientWrapper>
        <BackToTop />
      </body>
    </html>
  );
}
