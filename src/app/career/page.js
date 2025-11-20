import React from 'react'
import Career from './Career';

export const metadata = {
  title: "Careers at OnePixelSoft | Join Our Web & Tech Team",
  description: "Explore exciting career opportunities at OnePixelSoft. Join our innovative web development, digital marketing, and design teams. Apply today for a rewarding career!",
  keywords: ["web design", "digital marketing", "Jaipur"],
  authors: [{ name: "OnePixel Soft" }],
  robots: "index, follow",
  applicationName: "OnePixelSoft",
  creator: "OnePixelSoft",
  publisher: "OnePixelSoft",
  openGraph: {
    title: "OG Title",
    description: "OG Description",
    url: "https://onepixelsoft.com",
    siteName: "OnePixelSoft",
    images: [
      {
        url: "https://onepixelsoft.com/images/logo.webp",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitter Title",
    description: "Twitter Description",
    creator: "@OnePixelSoft",
    images: ["https://onepixelsoft.com/images/logo.webp"],
  },
};



export default function page() {
  
  return (
    <Career/>
  )
}
