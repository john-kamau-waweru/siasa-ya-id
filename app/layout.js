import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/ToastProvider";

export const metadata = {
  title: "#SiasaYaID by Siasa Place",
  description:
    "Access to IDs is a major barrier to young people's political participation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
