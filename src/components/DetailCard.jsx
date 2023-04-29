import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const DetailCard = (props) => {
    const [scoreColor, setColor] = useState("")

    function colorPicker(score) {
        if (score >= 80) setColor("green")
        else if (score >= 50) setColor("yellow")
        else setColor("red")
    }

    useEffect(() => {
        colorPicker(props.score)
    }, )
    
    return (
        <div className="bg-black w-full -mt-1 z-20 px-10 md:px-20 flex md:gap-16 py-5">
            <div className="flex flex-col gap-5">
                <div className="hidden md:block w-64 h-96 bg-white">
                    <img src={props.poster} alt="" className="w-full h-full object-cover" />
                </div>
                <Link>
                    <button className="hidden md:block bg-white w-full py-2 rounded-2xl text-xl text-black font-bold hover:bg-pink-600 hover:text-white duration-100">
                        ADD FAVORITE
                    </button>
                </Link>
            </div>
            <div className="flex flex-col gap-3 text-white w-full md:w-7/12">
                <div className="text-2xl md:text-3xl font-bold">
                    {props.title}  <span className="text-xs md:text-sm font-semibold">{props.format}</span>
                </div>
                <div className="flex gap-3 flex-wrap">
                    {props.genres.map((genre, keys) => {
                        return (
                            <div className="border-solid border-2 p-1 border-white text-xs md:text-sm font-medium">{genre}</div>
                        )
                    })}
                </div>
                <div className="text-md font-semibold">Total Episodes: {props.episode}</div>
                <div className="text-md font-semibold">Season: {props.season} {props.seasonYear}</div>
                {console.log(props.score)}
                <div className="text-md font-semibold">
                    Score: <span className={scoreColor === 'green' ? "text-green-500" : scoreColor === 'yellow' ?  "text-yellow-500" : "text-red-500"}>{props.score}</span>
                </div>
                <div className="text-md font-normal" dangerouslySetInnerHTML={{__html: props.desc}}></div>
                <Link>
                    <button className="md:hidden bg-white px-3 py-1 rounded-xl text-md text-black font-bold hover:bg-pink-600 hover:text-white duration-100">
                        ADD FAVORITE
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default DetailCard;