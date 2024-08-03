import { Inter, Gloria_Hallelujah } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/ConvexClientProviders";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-normal'
});

const gloria = Gloria_Hallelujah({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-edu'
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gloria.className} ${inter.className} bg-[#D9BF93]`}>
        <ConvexClientProvider>
          <div className="h-24 w-full">
            <Navbar/>
          </div>
          <div className="h-[calc(100vh-96px)] w-full">
            {children}
          </div>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
