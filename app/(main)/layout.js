import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}