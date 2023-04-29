import {  useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useQuery } from "@apollo/client";
import { GET_ANIME_DETAIL } from "../lib/getAnimeDetail";
import AnimeBanner from "../components/AnimeBanner";
import DetailCard from "../components/DetailCard";
import CharacterSlider from "../components/CharacterSlider";
import MobileNavbar from "../components/MobileNavbar";
import { useEffect, useRef, useState } from "react";
import SuggestionSlider from "../components/SuggestionSlider";

const AnimeDetails = () => {
    const param = useParams()
    const animeId = param.animeId;
    
    const {error, loading, data} = useQuery(GET_ANIME_DETAIL, {
        variables: {
            id: animeId
        }
    })
    const [mobileNavHeight, setHeight] = useState(0)
    const mobileNav = useRef(null)
    useEffect(() => {
        if (mobileNav.current) setHeight(mobileNav.current.offsetHeight)
    }, [])
    if (error) return <div></div>
    if (loading) return <div></div>
    return (
        <div className="bg-black">
            {console.log(mobileNavHeight)}
            <Navbar />
            <AnimeBanner banner={data.Page.media[0].bannerImage}/>
            <MobileNavbar ref={mobileNav}/>
            <DetailCard poster={data.Page.media[0].coverImage.large} title={data.Page.media[0].title.english} desc={data.Page.media[0].description} score={data.Page.media[0].averageScore} episode={data.Page.media[0].episodes} genres={data.Page.media[0].genres} season={data.Page.media[0].season} seasonYear={data.Page.media[0].seasonYear} format={data.Page.media[0].format}/>
            <div className="text-white text-2xl font-semibold px-10 md:px-20">Characters List</div>
            <CharacterSlider characters={data.Page.media[0].characters.nodes}/>
            <SuggestionSlider genres={data.Page.media[0].genres} id={animeId}/>
            <div style={{height : mobileNavHeight}} className="w-full"></div>
        </div>
    )
}

export default AnimeDetails;