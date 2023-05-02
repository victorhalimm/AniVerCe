import {  useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useQuery } from "@apollo/client";
import { GET_ANIME_DETAIL } from "../lib/getAnimeDetail";
import AnimeBanner from "../components/AnimeBanner";
import DetailCard from "../components/DetailCard";
import CharacterSlider from "../components/CharacterSlider";
import MobileNavbar from "../components/MobileNavbar";
import { useEffect, useRef, useState } from "react";
import SuggestionSlider from "../components/SuggestionSlider";
import LoadingPage from "./LoadingPage";
import Searchbar from "../components/Searchbar";
import ResultSection from "../components/ResultSection";
import FavoriteList from "../components/FavoriteList";
import FooterBar from "../components/FooterBar";

const AnimeDetails = (props) => {
    const param = useParams()
    const animeId = param.animeId;
    
    const {error, loading, data} = useQuery(GET_ANIME_DETAIL, {
        variables: {
            id: animeId
        }
    })
    const [mobileNavHeight, setHeight] = useState(0)
    const [currPage, setCurrPage] = useState('Home')
    const [searchActive, setActive] = useState(false)
    const [onSearch, setOnSearch] = useState(false) //ngasi tau uda mulai search ato lom
    const [searchQuery, setSearch] = useState('')
    const [searchBarHeight, setSearchHeight] = useState(0)
    const [onFavorite, setOnFavorite] = useState(false)

    const mobileNav = useRef(null)
    const searchBar = useRef(null)

    function goToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        if (mobileNav.current) setHeight(mobileNav.current.offsetHeight)
    }, [])

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

    useEffect(() => {
        if (currPage === 'Home') setOnFavorite(false)
        else if (currPage === 'Favorite') setOnFavorite(true)
    }, [currPage])

    useEffect(() => {  
        setHeight(0)
        setActive(false)
        setOnSearch(false)
        setSearch('')
        setSearchHeight(0)
        setOnFavorite(false)
        
    }, [animeId])

    const handleOnSearch = (status) => {
        setOnSearch(status)
    }

    const handleActive = (searchStatus) => {
        setActive(searchStatus)
    }
    
    const handlePageChange = (page) => {
        setCurrPage(page)
    }

    const handleSearch = (query) => {
        setSearch(query)
    }

    if (error) return <LoadingPage />
    if (loading) return <LoadingPage />
    return (
        <div className="bg-black overflow-x-hidden">
            
            <Navbar setPage={handlePageChange} searchChange={handleActive} hide={searchActive}/>
            <Searchbar show={searchActive} onSearchStatus={onSearch} searchChange={handleActive} typeSearch={handleSearch} searchWord={searchQuery} ref={searchBar} barHeight={searchBarHeight}/>
            <AnimeBanner banner={data.Page.media[0].bannerImage} onSearchStatus={onSearch} onFavorite={onFavorite}/>
            <MobileNavbar setPage={handlePageChange} ref={mobileNav} searchChange={handleActive} searchStatus={searchActive}/>
            
            {
                (!onSearch && !onFavorite) && 
                <>
                    <DetailCard anime={data.Page.media[0]}/>
                    <div className="text-white text-2xl  font-semibold px-10 md:px-20" >Characters List</div>
                    <CharacterSlider characters={data.Page.media[0].characters.nodes} />
                    <SuggestionSlider genres={data.Page.media[0].genres} id={animeId} />
                </>
            }
            {onSearch && <ResultSection searchWord={searchQuery}/>}
            {onFavorite && <FavoriteList />}
            <FooterBar />
            <div style={{height : mobileNavHeight}} className="w-full"></div>
        </div>
    )
}

export default AnimeDetails;