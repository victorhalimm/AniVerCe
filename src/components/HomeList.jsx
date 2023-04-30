import { useQuery } from "@apollo/client";
import { GET_ANIME_POPULAR } from "../lib/getAnimePopular";
import 'swiper/swiper-bundle.css';
import ListSlider from "./ListSlider";
import { GET_ANIME_FAVORITE } from "../lib/getAnimeFavorite";
import { GET_ANIME_AIRING } from "../lib/getAnimeAiring";
import LoadingPage from "../pages/LoadingPage";
import { GET_ANIME_TREND } from "../lib/getAnimeTrending";
import TrendingGrid from "./TrendingGrid";

const HomeList = (props) => {
    const {loading: popularLoading, error: popularError, data: popularData} = useQuery(GET_ANIME_POPULAR)
    const {loading: fanFavoriteLoading, error: fanFavoriteError, data: fanFavoriteData} = useQuery(GET_ANIME_FAVORITE)
    const {loading: airingLoading, error: airingError, data: airingData} = useQuery(GET_ANIME_AIRING)
    const {loading: trendLoading, error: trendError, data: trendData} = useQuery(GET_ANIME_TREND)
    
    if (popularLoading ||  fanFavoriteLoading ||airingLoading || trendLoading) return <LoadingPage />
    if (popularError || fanFavoriteError || airingError || trendError) return <LoadingPage /> 
    return (

        
        <div className={props.onSearchStatus || props.favoriteStatus ? "hidden" : 'bg-black w-full -mt-1 relative z-40'}>
            <div className="mx-10 md:mx-16 flex flex-col gap-5">
                <div className="hidden lg:block w-full text-white font-semibold text-2xl py-2 md:py-5">Trending</div>
                <div className="justify-center w-full flex md:justify-normal pb-10">
                    <TrendingGrid anime={trendData.Page.media}/>
                </div>
                <div className="w-full text-white font-semibold text-2xl py-2 md:py-5">Airing This Season</div>
                <div className="justify-center flex flex-wrap gap-10 md:justify-normal pb-10">
                    <ListSlider animes={airingData.Page.media}/>
                </div>
                <div className="w-full text-white font-semibold text-2xl py-2 md:py-5">Discover Popular Anime</div>
                <div className="justify-center flex flex-wrap gap-10 md:justify-normal pb-10">
                    <ListSlider animes={popularData.Page.media}/>
                </div>
                <div className="w-full text-white font-semibold text-2xl py-2 md:py-5">Fan Favorites</div>
                <div className="justify-center flex flex-wrap gap-10 md:justify-normal pb-10">
                    <ListSlider animes={fanFavoriteData.Page.media}/>
                </div>
                <div style={{height: props.mobileHeight}} className="bg-black"></div>
            </div>
        </div>
    )
}

export default HomeList;