import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sazzadul Islam Molla Portfolio",
  description: "Sazzadul Islam Molla Portfolio",
  keywords: ["Next.js", "React", "web development", "JavaScript"],
  icons: {
    icon: "/icon.png", // Default favicon
    shortcut: "/icon.png", // Shortcut icon for browsers
    apple: "/icon.png", // Apple touch icon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="PortfolioThem">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
