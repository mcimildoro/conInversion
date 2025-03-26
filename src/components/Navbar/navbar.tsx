"use client";
import Link from "next/link";
import { itemsNavbar } from "../../../data";
import { MotionTransition } from "../TransitionComponent/transition-component";
import { usePathname } from "next/navigation";

import { Home, User, BookText, CodeSquare, MessageCircle } from "lucide-react";



// Asocia los nombres con los componentes JSX
const navbarIcons = {
    Home: (props: any) => <Home  {...props} />,
    User: (props: any) => <User {...props} />,
    BookText: (props: any) => <BookText {...props} />,
    CodeSquare: (props: any) => <CodeSquare {...props} />,
    Speech: (props: any) => <MessageCircle {...props} />, // Speech no existe en lucide-react
};



const Navbar2 = () => {
    const router = usePathname();
    const showHomeButton = router === "/login" || router === "/register";
    return (
        <MotionTransition 
            position="right" 
            className="fixed z-40 flex justify-center bottom-10 w-full pointer-events-none"
        >
            <nav className="w-auto max-w-fit pointer-events-auto">
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-green-600 shadow-lg">

                    {itemsNavbar.map((item) => (
                        
                        <div
                            key={item.id}
                            className={`px-3 py-2 transition duration-200 ease-in-out rounded-full cursor-pointer 
                            hover:bg-green-500 ${router === item.link ? 'bg-green-700 shadow-md' : ''}`}
                            data-tooltip-target="tooltip-default"
                        >
                            
                            <Link
                                href={item.link}
                                className={`text-white transition-all duration-200 hover:scale-110 ${
                                    router === item.link ? "bg-green-700" : "" // Asegura que el activo recibe la clase
                                }`}
                            >
                                {navbarIcons[item.icon as keyof typeof navbarIcons]?.({ size: 25, color: "#fff", strokeWidth: 1 })}
                            </Link>

                        </div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
    
    
};

export default Navbar2;
