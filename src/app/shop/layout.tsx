import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Montserrat } from "next/font/google";
import InstagramSection from "@/components/home/InstagramSection";
import FeaturesBar from "@/components/home/FeaturesBar";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props 
  return (
      <div className={montserrat.className}>

        <main>{children}</main>
        <FeaturesBar />
        <InstagramSection />
      </div>
  )
}
