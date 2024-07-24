import "../globals.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function PageLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
