import styles from "./_Carousel.module.scss";

import {Swiper,SwiperSlide} from 'swiper/react';
import {EffectCards, FreeMode, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import React from "react";

const Carousel = (
    props: {
        type: "cards" | "line";
        children: React.ReactNode;
    }
) => {
    const {type} = props;
    const swiperStyles = type === 'line' ? {width: '100%'} : {width: '20em', height: '20em'};

    const wrapChildrenWithSwiperSlides = () => {
        return React.Children.map(props.children, (child, index) => {
            return (
                <SwiperSlide key={index} className={styles.slide}>
                    {child}
                </SwiperSlide>
            );
        });
    };

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
                {wrapChildrenWithSwiperSlides()}
            </Swiper>

        </div>
    );
}

export default Carousel;