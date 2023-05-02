import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCopyright } from '@fortawesome/free-regular-svg-icons'
import  LinkedInIcon from '../assets/linkedin-161-svgrepo-com.svg'
import GithubIcon from '../assets/github-142-svgrepo-com.svg'
import InstagramIcon from '../assets/instagram-167-svgrepo-com.svg'
import { Link } from 'react-router-dom'

const FooterBar = () => {
    return (
        <div className="bg-black px-10 md:px-16 flex flex-col gap-3 py-4 md:py-5">
            <div className="text-white opacity-50 text-sm md:text-base">
                <div className="pb-2"><FontAwesomeIcon icon={faCopyright}/> Aniverce by LC088 Victor Halim, All Rights Reserved</div>
                <div className="pb-2">Anime list provided by Anilist</div>
            </div>
            <div className="flex gap-5">
                <a href="https://www.linkedin.com/in/victor-halim-6a9336246/" rel='noreferrer' target='_blank'>
                    <img src={LinkedInIcon} className='w-5 md:w-7 fill-current opacity-30' alt="" />
                </a>
                <a href="https://github.com/victorhalimm" rel='noreferrer' target='_blank'>
                    <img src={GithubIcon} className='w-5 md:w-7 fill-current opacity-30' alt="" />
                </a>
                <a href="https://www.instagram.com/victorhalim_/?hl=en" rel='noreferrer' target='_blank'>
                    <img src={InstagramIcon} className='w-5 md:w-7 fill-current opacity-30' alt="" />
                </a>
            </div>
        </div>
    )
}

export default FooterBar