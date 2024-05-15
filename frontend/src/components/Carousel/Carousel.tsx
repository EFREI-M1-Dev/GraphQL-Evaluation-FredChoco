import CardArticle from "../CardArticle/CardArticle";
import styles from "./_Carousel.module.scss";

import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCards, FreeMode, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

const Carousel = (
    props: {
        type: "cards" | "line";
    }
) => {
    const {type} = props;
    const swiperStyles = type === 'line' ? {width: '100%'} : {width: '20em', height: '20em'};

    return (
        <div className={styles.slider}>
            <Swiper
                effect={type === 'cards' ? 'cards' : 'coverflow'}
                grabCursor={true}
                modules={type === 'cards' ? [EffectCards] : [FreeMode, Pagination]}

                //props pour le type line
                slidesPerView={type === 'line' ? 'auto' : undefined}
                spaceBetween={type === 'line' ? 30 : undefined}
                freeMode={type === 'line' ? true : undefined}
                style={swiperStyles}
            >
                {
                    Array.from({length: 10}).map((_, index) => (
                        <SwiperSlide key={index} className={styles.slide} >
                            <CardArticle />
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </div>
    );
}

export default Carousel;