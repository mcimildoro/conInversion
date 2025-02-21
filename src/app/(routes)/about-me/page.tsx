"use client"


import ContainerPage from "@/components/Container/container-page";
import CounterServices from "@/components/CounterServices/counter-services";
//import TimeLine from "@/components/TimeLine/time-line";
import TransitionPage from "@/components/TransitionPage/transition-page";
import TypewriterEffect from "@/components/TypewriterEffect/type-writer";
import TeamSection from "@/components/FramerMotion/framermotion";
import SpotlightCard from "@/components/AboutSection/about-section";
import { FooterWithLogo } from "@/components/Footer/footer";


const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
                <ContainerPage>          
                    <TypewriterEffect 
                        words={[
                            { text: "Quienes", className: "text-quienes" }, 
                            { text: "somos...", className: "text-somos" }
                        ]}
                        className="my-6 py-6 text-center" />
                    <SpotlightCard
                            title="Conócenos"
                            description="Somos dos emprendedores que hemos estado en tu lugar, enfrentando dudas y desafíos. 
                            Aprendimos de nuestros entornos familiares, empresariales y de estrategias exitosas para alcanzar
                            nuestra tranquilidad financiera y mental. Te ofrecemos una plataforma con un punto de vista claro y accesible, 
                            para que puedas tener perspectiva en el mundo de las inversiones en bolsa, sin importar la falta de tiempo, 
                            conocimientos, recursos o idioma." />                  
                    <CounterServices />
                    <TeamSection />             
                    {/*<TimeLine />*/}
                </ContainerPage>       
            <FooterWithLogo />
        </>
    );
}

export default AboutMePage;