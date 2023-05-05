import AnimeSlider from "../components/AnimeSlider";
import Navbar from "../components/Navbar";
import HomeList from "../components/HomeList";
import MobileNavbar from "../components/MobileNavbar";
import { useEffect, useRef, useState } from "react";
import Searchbar from "../components/Searchbar";
import ResultSection from "../components/ResultSection";
import FavoriteList from "../components/FavoriteList";
import FooterBar from "../components/FooterBar";


export default function Homepage() {
    
    const mobileNav = useRef(null)
    const desktopNav = useRef(null)
    const animeSlide = useRef(null)
    const searchBar = useRef(null)
    
    const [mobileNavHeight, setHeight] = useState(0)
    const [animeSlideHeight, setSlideHeight] = useState(0)
    const [scrollHeight , setScrollHeight ] = useState(0)
    const [searchBarHeight, setSearchHeight] = useState(0)
    const [navChange, setNav] = useState(false)
    const [searchActive, setActive] = useState(false)
    const [onSearch, setOnSearch] = useState(false) //ngasi tau uda mulai search ato lom
    const [searchQuery, setSearch] = useState('') //penampung word
    const [onFavorite, setOnFavorite] = useState(false)
    const [currPage, setCurrPage] = useState('Home')

    const handleActive = (searchStatus) => {
        setActive(searchStatus)
    }
    
    const handlePageChange = (page) => {
        setCurrPage(page)
    }

    function handleScroll() {
        const height = window.pageYOffset;
        setScrollHeight(height)
    }

    const handleSearch = (query) => {
        setSearch(query)
    }

    useEffect(() => {
        if (currPage === 'Home') setOnFavorite(false)
        else if (currPage === 'Favorite') {
            setOnFavorite(true)
            console.log("favorite is selected")
        }
    }, [currPage])
 
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })

    useEffect(() => {
        if (animeSlide.current) {
            setSlideHeight(animeSlide.current.offsetHeight)
        }
    }, [scrollHeight])

    useEffect(() => {
        if (scrollHeight >= animeSlideHeight - 300 && animeSlideHeight > 0) {
            setNav(true)
        }
        else setNav(false)
    }, [scrollHeight, animeSlide, animeSlideHeight])

    useEffect(() => {
        if (searchQuery.length > 0) {
            setOnSearch(true)
            goToTop()
        }
        else setOnSearch(false)
    }, [searchQuery])

    useEffect(() => {
        if (mobileNav.current) setHeight(mobileNav.current.offsetHeight)
        if (searchBar.current) setSearchHeight(searchBar.current.offsetHeight)
    }, [searchActive])

    function goToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    
    
    return (
    
    <div className="overflow-x-hidden bg-black">
        <Navbar setPage={handlePageChange} ref={desktopNav} changeBg={navChange} searchChange={handleActive} hide={searchActive}/>
        <Searchbar show={searchActive} onSearchStatus={onSearch} searchChange={handleActive} typeSearch={handleSearch} searchWord={searchQuery} ref={searchBar} barHeight={searchBarHeight}/>
        <MobileNavbar setPage={handlePageChange} ref={mobileNav} searchChange={handleActive} searchStatus={searchActive}/>
        <AnimeSlider favoriteStatus={onFavorite} ref={animeSlide} onSearchStatus={onSearch}/>
        <HomeList favoriteStatus={onFavorite} mobileHeight={mobileNavHeight} onSearchStatus={onSearch}/>
        {onSearch && <ResultSection searchWord={searchQuery}/>}
        {onFavorite && !onSearch && <FavoriteList />}
        <FooterBar />
        <div style={{height : mobileNavHeight}} className="w-full"></div>
    </div>
    )
}