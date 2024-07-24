import { Inter, Poppins } from "next/font/google";

import "../globals.css";

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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
