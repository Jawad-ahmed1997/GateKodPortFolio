'use client'
import Script from "next/script";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
//= Scripts
import generateStylesheetObject from '@/common/generateStylesheetsObject';
//= Common Components
import LoadingScreen from "@/components/Common/Loader";
import Cursor from "@/components/Common/Cursor";
import ProgressScroll from "@/components/Common/ProgressScroll";
//= Page Components
import CircleBg from "@/components/Demos/CircleBg";
import Header from "@/components/Demos/Header";
import MainContent from "@/components/Demos/MainContent";

// export const metadata = {
//   title: 'GateKod',
//   icons: {
//     icon: "/logoShort.ico",
//     shortcut: "/logoShort.ico",
//     other: generateStylesheetObject([
//       'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
//       'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap',
//       'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap',
//       '/css/dark.css',
//     ])
//   }
// }

export default function LandingPreview() {
  const router = useRouter();

  useEffect(() => {
   
      router.push('/homepage/home4-light');
 

    
  }, [router]);
  return (
    <>
      <LoadingScreen />
      <Cursor />
      <CircleBg />

      <Script strategy="beforeInteractive" src="/js/wow.min.js"></Script>
      <Script strategy="beforeInteractive" src="/js/splitting.min.js"></Script>
      <Script strategy="beforeInteractive" src="/js/simpleParallax.min.js"></Script>
      <Script strategy="beforeInteractive" src="/js/isotope.pkgd.min.js"></Script>
      <Script strategy="lazyOnload" src="/js/pace.min.js"></Script>
      <Script strategy="lazyOnload" src="/js/wowInit.js"></Script>
    </>
  )
}
