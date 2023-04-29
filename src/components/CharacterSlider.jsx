import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import CharacterCard from './CharacterCard';

const CharacterSlider = (props) => {
    return (
        <div className='px-10 md:px-20 pt-10 pb-20'>

            <Swiper
            // install Swiper modules
            spaceBetween={30}
            pagination={{ clickable: true , }}
            scrollbar={{ draggable: true}}
            breakpoints={{
                0 : {
                    slidesPerView : 3
                },
                768 : {
                    slidesPerView : 6,
                    
                }
            }}
            >
                {props.characters.map((character, key) => {
                    return (
                        <SwiperSlide>
                            <CharacterCard character={character}/>
                        </SwiperSlide>
                    )
                })}
                
            </Swiper>
        </div>
    )
}

export default CharacterSlider