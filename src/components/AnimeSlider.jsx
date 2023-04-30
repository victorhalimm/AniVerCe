import { useQuery } from "@apollo/client"
import {  GET_ANIME_SLIDER } from "../lib/getAnimeSlider"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import { Link } from "react-router-dom";
import React, { forwardRef, useState } from "react";
import LoadingPage from "../pages/LoadingPage";


// Import Swiper styles




const AnimeSlider = React.forwardRef((props, ref) => {

    const {loading, error, data} = useQuery(GET_ANIME_SLIDER)
    
    const [scoreColor, setColor] = useState("")

    function colorPicker(score) {
        if (score >= 80) setColor("green")
        else if (score >= 50) setColor("yellow")
        else setColor("red")
    }

    function animeUrl(id) {
        return '/anime/' + id
    }
    
    if (loading) return <LoadingPage />
    if (error) return <LoadingPage />
    return (
        // this is for desktop version
        
        <div ref={ref} className={props.onSearchStatus || props.favoriteStatus ? "hidden" : ''}>
            <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}            
            pagination={{ type: 'bullets', clickable: true }}
            loop={true}
            autoplay={true}
            >
                {data.Page.media.map((anime, keys) => {
                    return (
                            <SwiperSlide key={keys}>
                                <Link to={animeUrl(anime.id)}>
                                    <div className="-ml-1 -mr-1 absolute w-[105%] h-full bg-gradient-to-r from-black z-10"></div>
                                    <div className="-ml-1 -mr-1 absolute w-[105%] h-full bg-gradient-to-t from-black z-10"></div>
                                    <img src={anime.bannerImage} alt="" className="w-full h-full object-cover absolute -z-10 border-none outline-none" />
                                    <div className="flex w-full h-[50vh] md:w-1/2 md:h-screen relative z-30 justify-left items-end pb-7 md:pb-10 gap-3 md:gap-10 px-10 md:px-16"> 
                                        <div className="flex flex-col gap-3 md:gap-5 text-left">
                                            <div className="text-lg md:text-3xl text-white font-semibold">{anime.title.english}</div>
                                            <div className="text-sm md:text-lg  font-semibold text-white">
                                                Score: <span className={anime.averageScore >= 80 ? "text-green-500" : anime.averageScore >= 50 ?  "text-yellow-500" : "text-red-500"}>{anime.averageScore}</span>
                                            </div>
                                            <div className="flex gap-3 flex-wrap text-white">
                                                {anime.genres.map((genre, keys) => {
                                                    return (
                                                        <div className="border-solid border-2 py-1 px-2 border-white text-xs md:text-lg font-medium" key={keys}>{genre}</div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
});

export default AnimeSlider;