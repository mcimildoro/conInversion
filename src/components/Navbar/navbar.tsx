"use client";
import Link from "next/link";
import { JSX } from "react";
import { itemsNavbar } from "../../../data";
import { MotionTransition } from "../TransitionComponent/transition-component";
import { usePathname } from "next/navigation";
import { HomeIcon, UserRound, BookText, CodeSquare, Speech } from "lucide-react";

// Define los iconos válidos como un tipo
type NavbarIconName = "HomeIcon" | "UserRound" | "BookText" | "CodeSquare" | "Speech";

// Asocia los nombres con los componentes JSX
const navbarIcons: Record<NavbarIconName, JSX.Element> = {
    HomeIcon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    UserRound: <UserRound size={25} color="#fff" strokeWidth={1} />,
    BookText: <BookText size={25} color="#fff" strokeWidth={1} />,
    CodeSquare: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    Speech: <Speech size={25} color="#fff" strokeWidth={1} />,
};




const Navbar2 = () => {
    const router = usePathname();

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
                            <Link href={item.link} className="text-white transition-all duration-200 hover:scale-110">
                                {navbarIcons[item.icon as NavbarIconName]}
                            </Link>
                        </div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
    
    
};

export default Navbar2;
