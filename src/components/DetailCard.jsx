
import { useEffect, useState } from "react";

const DetailCard = (props) => {
    let [favoriteList, setFavorite] = useState(() => {
        let localStorageVal = localStorage.getItem('favorite')
        
        if (localStorageVal === null) {
            return ([])
        }
        else return JSON.parse(localStorageVal)
    })
    const [scoreColor, setColor] = useState("")
    
    const [existFavorite, setExist] = useState(() => {
        return favoriteList.some(obj => obj.id === props.anime.id)
    })


    function colorPicker(score) {
        if (score >= 80) setColor("green")
        else if (score >= 50) setColor("yellow")
        else setColor("red")
    }

    
    const removeFavorite = () => {
        const updatedData = favoriteList.filter(obj => obj.id !== props.anime.id);
        setFavorite(updatedData);
        setExist(false)
    }

    const addFavorite = (anime) => {
        setFavorite([...favoriteList, anime])
        setExist(true)
    }
    
    useEffect(() => {
        // console.log(favoriteList)
        localStorage.setItem('favorite', JSON.stringify(favoriteList))
    }, [favoriteList])

    useEffect(() => {
        colorPicker(props.anime.averageScore)
    }, )

    
    return (
        <div className="bg-black w-full -mt-1 z-20 px-10 md:px-20 flex md:gap-16 py-5">
            <div className="flex flex-col gap-5">
                <div className="hidden md:block w-64 h-96 bg-white">
                    <img src={props.anime.coverImage.large} alt="" className="w-full h-full object-cover" />
                </div>
                {
                    !existFavorite &&
                    <button onClick={() => addFavorite(props.anime)} className="hidden md:block bg-white w-full py-2 rounded-2xl text-xl text-black font-bold hover:bg-pink-600 hover:text-white duration-100">
                        ADD FAVORITE
                    </button>
                }
                {
                    existFavorite &&
                    <button onClick={() => removeFavorite(props.anime)}  className="hidden md:block bg-pink-600 w-full py-2 rounded-2xl text-xl text-white font-bold hover:text-black hover:bg-white duration-100">
                        REMOVE FAVORITE
                    </button>
                }
            </div>
            <div className="flex flex-col gap-3 text-white w-full md:w-7/12">
                <div className="text-2xl md:text-3xl font-bold">
                    {props.anime.title.english}  <span className="text-xs md:text-sm font-semibold">{props.anime.format}</span>
                </div>
                <div className="flex gap-3 flex-wrap">
                    {props.anime.genres.map((genre, keys) => {
                        return (
                            <div className="border-solid border-2 p-1 border-white text-xs md:text-sm font-medium">{genre}</div>
                        )
                    })}
                </div>
                <div className="text-md font-semibold">Total Episodes: {props.anime.episodes}</div>
                <div className="text-md font-semibold">Season: {props.anime.season} {props.anime.seasonYear}</div>
                <div className="text-md font-semibold">
                    Score: <span className={scoreColor === 'green' ? "text-green-500" : scoreColor === 'yellow' ?  "text-yellow-500" : "text-red-500"}>{props.anime.averageScore}</span>
                </div>
                <div className="text-md font-normal" dangerouslySetInnerHTML={{__html: props.anime.description}}></div>
                {
                    !existFavorite &&
                    <button onClick={() => addFavorite(props.anime)} className="md:hidden bg-white px-3 py-1 rounded-xl text-md text-black font-bold hover:bg-pink-600 hover:text-white duration-100">
                    ADD FAVORITE
                    </button>
                }
                {
                    existFavorite &&
                    <button onClick={() => removeFavorite(props.anime)}  className="md:hidden bg-pink-600 px-3 py-1 rounded-xl text-md text-white font-bold hover:bg-white hover:text-black duration-100">
                        REMOVE FAVORITE
                    </button>
                }
            </div>
        </div>
    )
}

export default DetailCard;