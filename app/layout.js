import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Providers from "./providers";
import "./reset.css"
const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Where in the world?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
