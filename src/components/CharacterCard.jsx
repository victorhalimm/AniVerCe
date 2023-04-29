const CharacterCard = (props) => {
    return (
        <div className="flex flex-col gap-3">
            <div className="w-[6.5rem] h-40 md:w-44 md:h-60 rounded-sm">
                <img src={props.character.image.large} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="text-lg text-white font-semibold">{props.character.name.full}</div>
        </div>
    
    )
}

export default CharacterCard