import { Fade } from "react-awesome-reveal"
import { Link } from "react-router-dom"

const TrendingGrid = (props) => {
    
    function animeLink(animeId) {
        return '/anime/' + animeId
    }

    return (
        <Fade cascade triggerOnce={true}>       
            <div className="hidden lg:flex w-full py-5 gap-10 bg-black justify-between items-center">
                <Link to={animeLink(props.anime[0].id)}>
                    <div className="bg-white w-72 h-[24.75] duration-150 hover:scale-110 relative">
                        <div className="absolute bottom-0 text-white text-3xl font-semibold px-3 pb-5 z-20">#1 {props.anime[0].title.english.length > 20 ? props.anime[0].title.english.slice(0, 20 ) + '...' : props.anime[0].title.english  }</div>
                        <div className="absolute w-full h-full from-black bg-gradient-to-t"></div>
                        <img src={props.anime[0].coverImage.extraLarge} alt="" className="w-full h-full object-cover"/>
                    </div>
                </Link>
                <Link to={animeLink(props.anime[1].id)}>
                    <div className="bg-white w-72 h-[24.75] duration-150 hover:scale-110 relative">
                        <div className="absolute bottom-0 text-white text-3xl font-semibold px-3 pb-5 z-20">#2 {props.anime[1].title.english.length > 20 ? props.anime[1].title.english.slice(0, 20 ) + '...' : props.anime[1].title.english  }</div>
                        <div className="absolute w-full h-full from-black bg-gradient-to-t"></div>
                        <img src={props.anime[1].coverImage.extraLarge} alt="" className="w-full h-full object-cover"/>
                    </div>
                </Link>
                <div className="flex flex-col gap-3">
                    <div className="flex-row flex gap-10 justify-between">
                        <Link to={animeLink(props.anime[2].id)}>
                            <div className="w-36 h-52 hover:scale-110 duration-150 bg-white relative">
                                <div className="absolute bottom-0 text-white font-semibold text-sm z-20 px-3 pb-5">#3 {props.anime[2].title.english.length > 20 ? props.anime[2].title.english.slice(0, 20 ) + '...' : props.anime[2].title.english  }</div>
                                <div className="absolute w-full h-full from-black bg-gradient-to-t"></div>
                                <img src={props.anime[2].coverImage.extraLarge} alt="" className="w-full h-full object-cover"/>
                            </div>
                        </Link>
                        <Link to={animeLink(props.anime[3].id)}>
                            <div className="w-36 h-52 hover:scale-110 duration-150 bg-white relative">
                                <div className="absolute bottom-0 text-white font-semibold text-sm z-20 px-3 pb-5">#4 {props.anime[3].title.english.length > 20 ? props.anime[3].title.english.slice(0, 20 ) + '...' : props.anime[3].title.english  }</div>
                                <div className="absolute w-full h-full from-black bg-gradient-to-t"></div>
                            <img src={props.anime[3].coverImage.extraLarge} alt="" className="w-full h-full object-cover"/>
                            </div>

                        </Link>
                        <Link to={animeLink(props.anime[4].id)}>
                            <div className="w-36 h-52 hover:scale-110 duration-150 bg-white relative">
                                <div className="absolute bottom-0 text-white font-semibold text-sm z-20 px-3 pb-5">#5 {props.anime[4].title.english.length > 20 ? props.anime[4].title.english.slice(0, 20 ) + '...' : props.anime[4].title.english  }</div>
                                <div className="absolute w-full h-full from-black bg-gradient-to-t"></div>
                                <img src={props.anime[4].coverImage.extraLarge} alt="" className="w-full h-full object-cover"/>
                            </div>
                        </Link>
                        <Link to={animeLink(props.anime[5].id)}>
                            <div className="w-36 h-52 hover:scale-110 duration-150 bg-white relative">
                                <div className="absolute bottom-0 text-white font-semibold text-sm z-20 px-3 pb-5">#6 {props.anime[5].title.english.length > 20 ? props.anime[5].title.english.slice(0, 20 ) + '...' : props.anime[5].title.english  }</div>
                                <div className="absolute w-full h-full from-black bg-gradient-to-t"></div>
                            <img src={props.anime[5].coverImage.extraLarge} alt="" className="w-full h-full object-cover"/>
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-row gap-10 justify-between">
                        <Link to={animeLink(props.anime[6].id)}>
                            <div className="w-36 h-52 hover:scale-110 duration-150 bg-white relative">
                                <div className="absolute bottom-0 text-white font-semibold text-sm z-20 px-3 pb-5">#7 {props.anime[6].title.english.length > 20 ? props.anime[6].title.english.slice(0, 20 ) + '...' : props.anime[6].title.english  }</div>
                                <div className="absolute w-full h-full from-black bg-gradient-to-t"></div>
                                <img src={props.anime[6].coverImage.extraLarge} alt="" className="w-full h-full object-cover"/>
                            </div>
                        </Link>
                        <Link to={animeLink(props.anime[7].id)}>
                            <div className="w-36 h-52 hover:scale-110 duration-150 bg-white relative">
                                <div className="absolute bottom-0 text-white font-semibold text-sm z-20 px-3 pb-5">#8 {props.anime[7].title.english.length > 20 ? props.anime[7].title.english.slice(0, 20 ) + '...' : props.anime[7].title.english  }</div>
                                <div className="absolute w-full h-full from-black bg-gradient-to-t"></div>
                                <img src={props.anime[7].coverImage.extraLarge} alt="" className="w-full h-full object-cover"/>
                            </div>

                        </Link>
                        <Link to={animeLink(props.anime[8].id)}>
                            <div className="w-36 h-52 hover:scale-110 duration-150 bg-white relative">
                                <div className="absolute bottom-0 text-white font-semibold text-sm z-20 px-3 pb-5">#9 {props.anime[8].title.english.length > 20 ? props.anime[8].title.english.slice(0, 20 ) + '...' : props.anime[8].title.english  }</div>
                                <div className="absolute w-full h-full from-black bg-gradient-to-t"></div>
                                <img src={props.anime[8].coverImage.extraLarge} alt="" className="w-full h-full object-cover"/>
                            </div>

                        </Link>
                        <Link to={animeLink(props.anime[9].id)}>
                            <div className="w-36 h-52 hover:scale-110 duration-150 bg-white relative">
                                <div className="absolute bottom-0 text-white font-semibold text-sm z-20 px-3 pb-5">#10 {props.anime[9].title.english.length > 20 ? props.anime[9].title.english.slice(0, 20 ) + '...' : props.anime[9].title.english  }</div>
                                <div className="absolute w-full h-full from-black bg-gradient-to-t"></div>
                                <img src={props.anime[9].coverImage.extraLarge} alt="" className="w-full h-full object-cover"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default TrendingGrid