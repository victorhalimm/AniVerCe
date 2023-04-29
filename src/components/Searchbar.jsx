import React, { forwardRef, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faXmark } from '@fortawesome/free-solid-svg-icons'

const Searchbar = React.forwardRef((props, ref) => {
    

    const handleSearch = (event) => {
        props.typeSearch(event.target.value)
    }
    
    const handleClose = () => {
        props.searchChange(false)
        props.typeSearch('')
    }

    return (
        <>
            <div ref={ref} className={props.show ? "fixed top-0 duration-300 bg-zinc-900 w-full items-center px-7 md:px-16 py-5 z-50 flex md:gap-3" : "hidden"}>
                <input type="text" value={props.searchWord} onChange={handleSearch} placeholder="Search for anime" className="bg-transparent text-white outline-none text-xl w-full"/>
                <button onClick={handleClose}>
                    <FontAwesomeIcon icon={faXmark} className="text-white text-3xl"/>
                </button>               
            </div>
            <div style={{height: props.barHeight, width: "100%"}}></div>
        </>
    )
})

export default Searchbar