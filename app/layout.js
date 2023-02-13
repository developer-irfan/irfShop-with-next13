"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Provider store={store}>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
