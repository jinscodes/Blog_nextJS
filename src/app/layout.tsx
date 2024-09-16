import type { Metadata } from "next";

import Footer from "components/Footer/Footer";
import Nav from "components/Nav/Nav";

import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";

import st from "./layout.module.scss";

export const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jay's blog",
  description: "This is Jay's engineering blog. Welcome!",
};

export const maple = localFont({
  src: "../../public/fonts/MaplestoryLight.otf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={maple.className}>
      <head>
        <meta
          name="google-site-verification"
          content="UsJTCqcbonDCWQSJ3jHs3BjFeP8JWdMq3ZcZ0eljW-Y"
        />
      </head>
      <body className={st.body}>
        <Nav />
        <main className={st.main}>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
