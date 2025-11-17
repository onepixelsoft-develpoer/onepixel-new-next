import { Inter } from "next/font/google";
import "../styles/global.css";
import "../styles/modules/Animate.css";
import "../styles/modules/commen.css";
import "../styles/modules/About.css";

import Topbar from "@/components/layout/Topbar/Topbar";
import Header from "@/components/layout/Header";
import ClientWrapper from "@/components/ClientWrapper/ClientWrapper";
import BackToTop from "@/Commen-components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXX');
            `,
          }}
        />
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
