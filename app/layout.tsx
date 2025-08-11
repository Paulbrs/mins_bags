import { Noto_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "./components";

const notoSans = Noto_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: ['300','400','500', '600', '700', '800'],
  style: [ 'italic',],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mins_bags | Главная",
  description: "Сумочки из бусин | ручная работа",
};


export default function RootLayout({ children}: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={notoSans.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}






