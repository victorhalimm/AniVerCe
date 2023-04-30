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
        <div className="w-full flex px-5 md:px-16 gap-3 justify-start md:gap-7 flex-wrap py-5">
            {props.animes.map((anime, key) => {
                return (
                    <>
                        {
                            props.animation &&
                            <Fade keys={key} cascade bottom delay={500} exit={false} triggerOnce={true}>
                                <button onMouseEnter={() => handleMouseEnter(key)} onMouseLeave={() => handleMouseLeave()} onTouchStart={() => handleMouseEnter(key)}>
                                    <div className="w-28 h-40 md:w-44 md:h-60 relative hover:scale-110 duration-150">
                                        {(active === key) ? <ListHoverCard anime={anime}/> : ""}
                                        <img src={anime.coverImage.large} alt="" srcset="" className="rounded-sm object-cover w-full h-full -z-10"/>
                                    </div>
                                </button>
                            </Fade>
                        }
                        {
                            !props.animation &&
                            <button onMouseEnter={() => handleMouseEnter(key)} onMouseLeave={() => handleMouseLeave()} onTouchStart={() => handleMouseEnter(key)}>
                                <div className="w-28 h-40 md:w-44 md:h-60 relative hover:scale-110 duration-150">
                                    {(active === key) ? <ListHoverCard anime={anime}/> : ""}
                                    <img src={anime.coverImage.large} alt="" srcset="" className="rounded-sm object-cover w-full h-full -z-10"/>
                                </div>
                            </button>
                        }
                    </>

                    
                )
            })}
        </div>
    )
}

export default AnimeGrid