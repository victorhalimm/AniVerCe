import { Link } from "react-router-dom";

const ListHoverCard = (props) => {
    
    function animeLink(animeId) {
        return '/anime/' + animeId
    }

    return (
        
        <div className="absolute w-full h-full justify-center items-start flex flex-col gap-5 px-5 hover:backdrop-brightness-[0.25] z-30 duration-200">
            <div className="text-xs md:text-base text-white font-medium text-left">{props.anime.title.english}</div>
            <div className="text-xs md:text-sm text-white font-medium flex flex-wrap">
                <p>Genres: </p> 
                {props.anime.genres.map((genre, key) => {
                    return <p className="font-semibold" key={key}>{genre}, </p>
                })}
            </div>
            <div className="z-50">
                <Link to={animeLink(props.anime.id)}>
                    <div className="text-white text-xs md:text-sm font-medium hover:text-blue-500">Detail</div>
                </Link>
            </div>
        </div>
    )
}

export default ListHoverCard;