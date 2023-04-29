import ListHoverCard from "./ListHoverCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useState } from "react";
import { Slide } from "react-awesome-reveal";

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
                spaceBetween={30}
                pagination={{ clickable: true  }}
                scrollbar={{ draggable: true}}
                breakpoints={{
                    0 : {
                        slidesPerView : 3
                    },
                    768 : {
                        slidesPerView : 7,
                        
                    }
                }}
                >
                    {props.animes.map((anime, key) => {
                        return (
                            <SwiperSlide key={key}>
                                <button onMouseEnter={() => handleMouseEnter(key)} onMouseLeave={() => handleMouseLeave()} onTouchStart={() => handleMouseEnter(key)}>
                                    <div className="w-[6.5rem] h-44 md:w-44 md:h-60 relative">
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