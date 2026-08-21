import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://khemrajpaneru.com.np"),

  title: {
    default: "Khem Raj Yatri | Electronics, Software & Data",
    template: "%s | Khem Raj Yatri",
  },

  description:
    "Personal portfolio of Khem Raj Yatri — an electronics and technology enthusiast building projects across embedded systems, software, data, and practical problem solving.",

  keywords: [
    "Khem Raj Yatri",
    "Yatri",
    "Khem Raj Paneru",
    "Khem Raj",
    "Paneru",
    "Electronics",
    "Embedded Systems",
    "Software",
    "Data",
    "Python",
    "NEPSE",
    "Technology Projects",
    "Nepal",
    "PabrozLab"
  ],

  authors: [
    {
      name: "Khem Raj Yatri",
      url: "https://khemrajpaneru.com.np",
    },
  ],

  creator: "Khem Raj Yatri",

  openGraph: {
    title: "Khem Raj Yatri | Electronics, Software & Data",
    description:
      "Electronics, software, embedded systems, data, and practical technology projects by Khem Raj Yatri.",
    siteName: "Khem Raj Yatri",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Khem Raj Yatri | Electronics, Software & Data",
    description:
      "Electronics, software, embedded systems, data, and practical technology projects by Khem Raj Yatri.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WWY3WPYL01"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WWY3WPYL01');
          `}
        </Script>
      </body>
    </html>
  );
}