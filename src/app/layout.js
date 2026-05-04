import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LibraryNest - Borrow Books Online in Bangladesh",
  description: "LibraryNest is Bangladesh's best digital library platform. Browse thousands of books across Story, Tech, and Science. Borrow books easily with a few clicks. Free and user-friendly",
  keywords: ["library", "books", "borrow books", "digital library", "bangladesh", "online library", "book lending", "LibraryNest"]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-200">
        {children} 
        <ToastContainer position="top-center" autoClose={3000} />
        </body>
    </html>
  );
}
