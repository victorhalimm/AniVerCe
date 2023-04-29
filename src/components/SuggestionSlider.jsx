import { useQuery } from "@apollo/client"
import { GET_ANIME_SUGGESTION } from "../lib/getAnimeSuggestion"
import ListSlider from "./ListSlider"

const SuggestionSlider = (props) => {
    const {loading, error, data} = useQuery(GET_ANIME_SUGGESTION, {
        variables: {
            "genres" : props.genres,
            "id": props.id
        }
    })
    
    if (loading) return <div></div>
    if (error) return <div></div>
    return (
        <div className="px-10 md:px-20 pb-20 bg-black">
            <div className="text-white text-2xl font-semibold pb-10">More Anime Like This</div>
            <ListSlider animes={data.Page.media}/>
        </div>
    )
}

export default SuggestionSlider