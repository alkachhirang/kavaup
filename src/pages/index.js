'use-client';
import React, { useState, useEffect } from 'react';
import Head from "next/head";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import TrustedPartner from "@/components/TrustedPartner";
import WhoWeAre from "@/components/WhoWeAre";
import Help from "@/components/Help";
import OurProcess from "@/components/OurProcess";
import "bootstrap/dist/css/bootstrap.min.css";
import HowWeHelp from "@/components/HowWeHelp";
import Transformation from "@/components/Transformation";
import Footer from "@/components/Footer";
// import backtotop from '../../public/assets/images/png/backtotop.png'
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Preloader from '@/components/Preloader';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Home() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 800,
      }
    );
    Aos.refresh()
  });
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 3500);
  }, []);
  return (
    <>
      <Head>
        <title>Kava-Up</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {screenLoading ? (
         <Preloader/>
        ) : (
            <main className={`${poppins.className} overflow-hidden`}>
              <>
                <Header />
                <TrustedPartner />
                <WhoWeAre />
                <Help />
                <OurProcess />
                <HowWeHelp />
                <Transformation />
                <Footer />
                <div onClick={() => top()} className={backToTop ? "back_to_top shadow-[0_5px_16px_rgba(76,87,255,1)] overflow-hidden position-fixed d-flex align-items-center justify-content-center cursor_pointer" : "d-none"}>
                  <Image src='/assets/images/webp/backtotop.webp' alt='backtotop' width={30} height={30} />
                </div>
              </>
            </main>
        )
        }
      </div >

    </>
  );
}
