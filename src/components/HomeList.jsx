import { useQuery } from "@apollo/client";
import { GET_ANIME_POPULAR } from "../lib/getAnimePopular";
import 'swiper/swiper-bundle.css';
import ListSlider from "./ListSlider";
import { GET_ANIME_TREND } from "../lib/getAnimeTrending";
import { GET_ANIME_FAVORITE } from "../lib/getAnimeFavorite";

const HomeList = (props) => {
    const {loading: popularLoading, error: popularError, data: popularData} = useQuery(GET_ANIME_POPULAR)
    const {loading: trendingLoading, error: trendingError, data: trendingData} = useQuery(GET_ANIME_TREND)
    const {loading: fanFavoriteLoading, error: fanFavoriteError, data: fanFavoriteData} = useQuery(GET_ANIME_FAVORITE)
    if (popularLoading || trendingLoading || fanFavoriteLoading) return <div></div>
    if (popularError || trendingError || fanFavoriteError) return <div></div>  
    return (

        
        <div className={props.onSearchStatus ? "hidden" : 'bg-black w-full -mt-1 relative z-40'}>
            <div className="mx-10 md:mx-16 flex flex-col gap-5">
            <div className="w-full text-white font-semibold text-2xl py-2 md:py-5">Trending Now</div>
                <div className="justify-center flex flex-wrap gap-10 md:justify-normal pb-10">
                    <ListSlider animes={trendingData.Page.media}/>
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