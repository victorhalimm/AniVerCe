import { useState } from "react";
import ListHoverCard from "./ListHoverCard";
import AnimeGrid from "./AnimeGrid";

const FavoriteList = (props) => {
    
    let [favoriteList, setFavorite] = useState(() => {
        let localStorageVal = localStorage.getItem('favorite')
        
        if (localStorageVal === null) {
            return ([])
        }
        else return JSON.parse(localStorageVal)
    })
    
    
    return (
        <div className="md:pt-24 bg-black flex flex-col gap-3 min-h-screen w-screen">
            <div className="px-5 py-3 md:px-20 text-xl md:text-3xl font-semibold text-white">My List</div>
            <AnimeGrid animation={false} animes={favoriteList}/>
        </div>
    )
}

export default FavoriteList