import { useQuery } from "@apollo/client";
import { GET_ANIME_SEARCH } from "../lib/getAnimeSearch";
import AnimeGrid from "./AnimeGrid";
import LoadingPage from "../pages/LoadingPage";

const ResultSection = (props) => {
    const {loading, error, data} = useQuery(GET_ANIME_SEARCH, {
        variables : {
            search : props.searchWord
        }
    })

    if (loading) return <LoadingPage />
    if (error) return <LoadingPage />
    return (
        
        <div className="w-screen py-10 bg-black min-h-screen">
            <div className="px-8 md:px-16 text-white text-xl md:text-2xl font-medium py-5">Search results for: {props.searchWord}</div>
            <AnimeGrid animes={data.Page.media}/>
        </div>
    )
}

export default ResultSection