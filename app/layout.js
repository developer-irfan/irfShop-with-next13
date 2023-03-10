"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:3000/api/graphql",
  }),
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Provider store={store}>
          <header>
            <Navbar />
          </header>
          <ApolloProvider client={client}>
            <main>{children}</main>
          </ApolloProvider>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
