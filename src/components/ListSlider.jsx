import ListHoverCard from "./ListHoverCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useState } from "react";
import {  FreeMode } from "swiper";

const ListSlider = (props) => {
    const [active, setActive] = useState(-1)
    function handleMouseEnter(key) {
        setActive(key);
    }

    function handleMouseLeave() {
        setActive(-1);
    }
    
    return (
        
        <Swiper
                // install Swiper modules
                modules={[FreeMode]}
                spaceBetween={30}
                scrollbar={{ 
                    draggable: true,
                }}
                // freeMode={true}
                breakpoints={{
                    0 : {
                        slidesPerView : 3
                    },
                    768 : {
                        slidesPerView : 6,
                        
                    }
                }}
                
                >
                    {props.animes.map((anime, key) => {
                        return (
                            <SwiperSlide key={key} className="py-5">
                                <button onMouseEnter={() => handleMouseEnter(key)} onMouseLeave={() => handleMouseLeave()} onTouchStart={() => handleMouseEnter(key)}>
                                    <div className="w-[6.5rem] h-44 md:w-44 md:h-60 relative hover:scale-110 duration-150">
                                        {(active === key) ? <ListHoverCard anime={anime}/> : ""}
                                        <img src={anime.coverImage.large} alt="" srcset="" className="rounded-sm object-cover w-full h-full -z-10"/>
                                    </div>
                                </button>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
    )
}

export default ListSlider