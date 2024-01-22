import Sidebar from "@/components/sidebar";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MobileNavbar from "@/components/mobile-navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arke Client",
  description: "Arke Client",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <main>
          <Navbar />
          <MobileNavbar />
          <div className="px-4 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-10 md:px-8">
            <Sidebar />
            <div className="py-8">{children}</div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
