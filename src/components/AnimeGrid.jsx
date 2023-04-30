import { useState } from "react";
import ListHoverCard from "./ListHoverCard";
import { Fade } from "react-awesome-reveal";

const AnimeGrid = (props) => {
    const [active, setActive] = useState(-1)
    
    function handleMouseEnter(key) {
        setActive(key);
    }

    function handleMouseLeave() {
        setActive(-1);
    }
    
    return (
        <div className="w-full flex px-5 md:px-16 gap-2 justify-center md:justify-start md:gap-7 flex-wrap">
            {props.animes.map((anime, key) => {
                return (
                    <Fade keys={key} cascade bottom delay={500} exit={false} triggerOnce={true}>
                        <button onMouseEnter={() => handleMouseEnter(key)} onMouseLeave={() => handleMouseLeave()} onTouchStart={() => handleMouseEnter(key)}>
                            <div className="w-28 h-40 md:w-44 md:h-60 relative">
                                {(active === key) ? <ListHoverCard anime={anime}/> : ""}
                                <img src={anime.coverImage.large} alt="" srcset="" className="rounded-sm object-cover w-full h-full -z-10"/>
                            </div>
                        </button>
                    </Fade>
                )
            })}
        </div>
    )
}

export default AnimeGrid