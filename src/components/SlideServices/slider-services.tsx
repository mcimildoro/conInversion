"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { JSX } from 'react';
import { Pagination } from 'swiper/modules';
import { serviceData } from '../../../data';
import { Crop, Pencil, Computer, Book, Rocket } from 'lucide-react';

// Define los iconos válidos como un tipo
type IconName = "Crop" | "Pencil" | "Computer" | "Book" | "Rocket";

// Asocia los nombres con los componentes JSX
export const iconComponents: Record<IconName, JSX.Element> = {
    Crop: <Crop />,
    Pencil: <Pencil />,
    Computer: <Computer />,
    Book: <Book />,
    Rocket: <Rocket />,
};



const SliderServices = () => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="h-[280px] md:h-[340px] w-[270px] md:w-[550px]"
        >

            {serviceData.map((item, index) => (
                <SwiperSlide key={index} >
                    <div className="flex px-6 py-8 h-auto md:h-[290px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
                        <div className="mb-4 text-4xl text-secondary">{iconComponents[item.icon as IconName]}</div>
                        <div>
                            <h3 className="mb-4 text-lg">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
        </Swiper>
    );
}

export default SliderServices;