import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";

import "../globals.css";

import "../globals.css";
const Header = dynamic(() => import("../../components/Header"), {
  ssr: false,
});
const Sidebar = dynamic(() => import("../../components/Sidebar"), {
  ssr: false,
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Gyde dashboard",
  description: "A test dashboard",
  icons: {
    icon: "/images/logo-small.svg",
  },
};

export default function PageLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="flex ">
          <Sidebar />
          <div className="main-content w-full">
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
