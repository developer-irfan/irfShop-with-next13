import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
