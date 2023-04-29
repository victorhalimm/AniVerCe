const AnimeBanner = (props) => {
    return (
        <div className="w-full h-[40vh] bg-slate-500 md:h-[50vh] relative">
            <div className="w-full h-full absolute bg-gradient-to-t from-black z-10"></div>
            <div className="w-full h-full absolute bg-gradient-to-r from-black z-10"></div>
            <img src={props.banner} alt="" className="z-0 object-cover h-full w-full"/>
        </div>
    )
}

export default AnimeBanner;