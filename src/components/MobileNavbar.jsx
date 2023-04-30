import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const MobileNavbar = React.forwardRef((props, ref) => {
    
    const handleSearch = () => {
        const status = !props.searchStatus
        props.searchChange(status)
    }

    const handleHome = () => {
        props.setPage('Home')
    }

    const handleFavorite = () => {
        props.setPage('Favorite')
    }
    
    return (
        <nav ref={ref} className="md:hidden block fixed bottom-0 bg-black px-5 w-full z-50">
            <div className='flex items-center justify-around py-5'>
                <Link to="/">
                    <button onClick={handleHome}>
                        <FontAwesomeIcon icon={faHouse} className='text-white text-xl'/>
                    </button>
                </Link>
                <button onClick={handleFavorite}>
                    <FontAwesomeIcon icon={faHeart} className='text-white text-xl'/>
                </button>
                <button onClick={handleSearch}>
                    <FontAwesomeIcon icon={faSearch} className='text-white text-xl'/>
                </button>
            </div>
        </nav>
    )
})

export default MobileNavbar;