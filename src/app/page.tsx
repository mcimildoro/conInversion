'use client'

import IntroSection from "@/components/Introduction/introduction";
//import SpotlightCard from '@/components/SpotlightCard/SpotlightCard';
import TransitionPage from "@/components/TransitionPage/transition-page";
import  InfoCard  from "@/components/InfoCard/info"; // Adjust the import path as necessary+
import CalculatorBanner from "@/components/HeroSection/calculator";
import BannerSymbol from "@/components/BannerSymbols/banner";

//import ContainerPage from "@/components/Container/container-page";
//import {StickyScrollRevealDemo} from "@/components/LayoutGrid/sticky-scrool";
import Oportunidades from "@/components/CardData/oportunidades";
import { FooterWithLogo } from "@/components/Footer/footer";
import Testimonials from "@/components/Testimonials/testimonials";
import Pricing from "@/components/PricingSections/pricing";
import {FAQ} from "@/components/FAQs/faq";
import ContainerPage from "@/components/Container/container-page";

export default function Home() {
  return (
    <>
    <main>
      <TransitionPage />

      {/* intro y conver section */}
      <ContainerPage>
        <IntroSection />
      </ContainerPage>

      <div className="relative w-full min-h-[300px] py-16 bg-[#F5F5F7]">
        {/* Fondo que cubre toda la sección */}
        <div className="absolute inset-0 w-full h-full "></div>
        <div className="relative z-30 w-full max-w-screen-2xl mx-auto px-6  md:pb-0 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
            <InfoCard title="¿Por qué utilizamos la estrategia de Warren Buffett?" />
            <InfoCard title="¿Qué broker debo usar?" />
            <InfoCard title="¿Cuánto puedo ganar según mi inversión?" />
          </div>
        </div>
      </div>

      

      {/* Calculator section */}
      <CalculatorBanner />

      {/* info section */}
      <BannerSymbol />

      <Oportunidades />

      {/*<ContainerPage> 
        <StickyScrollRevealDemo />
      </ContainerPage>*/}

      <Testimonials />

      <Pricing />

      <FAQ />
      <FooterWithLogo />
    </main>

    </>
  );
}

