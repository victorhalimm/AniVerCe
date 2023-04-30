import {
    Link
  } from "react-router-dom";

import Logo from '../assets/anipeak-logo.png';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch } from '@fortawesome/free-solid-svg-icons'


const Navbar = React.forwardRef((props, ref) => {
    let [selected, setSelected] = useState('Home');
    
    function handleSelect(selectedName)  {
        setSelected(selectedName);
    };
    

    const handleSearch = () => {
        props.searchChange(true);
    }
    return (
        <div className={props.hide ? 'hidden' : ''}>
            <nav ref={ref} className={props.changeBg ? "hidden md:block p-4 bg-black fixed w-full z-50 duration-200" : "hidden md:block p-4 bg-transparent fixed w-full z-50 duration-200"}>
                
                {/* desktop version */}
                <div className="flex justify-between px-14 items-center w-full">
                    <div className="flex justify-around gap-8  text-slate-100 font-semibold text-lg items-center">
                        <div>
                            <Link to='/'>
                                <img src={Logo} alt="Logo" className="h-14 w-auto"/>
                            </Link>
                        </div>
                        <div className={selected === 'Home' ? " bg-slate-50 text-slate-950 px-3 py-1 ease-in duration-100 rounded-lg" : "px-3 py-1 ease-out rounded-lg"}>
                            <Link to='/' onClick={() => {
                                handleSelect('Home')
                                props.setPage('Home')

                        }}>Home</Link>
                        </div>
                        <div className={selected === 'Favorite' ? " bg-slate-50 text-slate-950 px-3 py-1 ease-in duration-100 rounded-lg" : "px-3 py-1 ease-out rounded-lg"}>
                            <Link to='/' onClick={() => {
                                handleSelect('Favorite')
                                props.setPage('Favorite')
                        }}>Favorite</Link>
                        </div>
                    </div>
                    <button className={props.searchDisabled ? 'hidden' : "text-white text-lg font-medium"} onClick={handleSearch}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
            </nav>
        </div>
        
    );
});

export default Navbar;