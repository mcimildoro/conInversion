"use client";
import Link from "next/link";
import { itemsNavbar } from "../../../data";
import { MotionTransition } from "../TransitionComponent/transition-component";
import { usePathname } from "next/navigation";

const Navbar2 = () => {
    const router = usePathname();

    return (
        <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-[#1B5E20] shadow-lg">
                    
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className={`px-3 py-2 transition duration-200 ease-in-out rounded-full cursor-pointer 
                            hover:bg-[#2E7D32] ${router === item.link ? 'bg-[#4CAF50] shadow-md' : ''}`}
                            data-tooltip-target="tooltip-default"
                        >
                            <Link href={item.link} className="text-white transition-all duration-200 hover:scale-110">
                                {item.icon} 
                            </Link>
                        </div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
};

export default Navbar2;
