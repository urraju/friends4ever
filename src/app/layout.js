import { Inter } from "next/font/google";
import "./globals.css";
import AuthContext from "@/components/Athentication/Authentication";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Friends 4 Ever",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <div>
          <Toaster/>
          <AuthContext>{children}</AuthContext>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
