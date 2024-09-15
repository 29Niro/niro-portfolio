"use client";

import { useSwiper } from "swiper/react";
import {PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'


const WorkSliderButtons = ({containerStyles, btnStyles, iconStyles}) => {
    const swiper = useSwiper();
    return (
    <div className={containerStyles}>
        <button 
            onClick={() => swiper.slidePrev()} 
            className={btnStyles}
        >
            <PiCaretLeftBold style={iconStyles} />
        </button>
        <button 
            onClick={() => swiper.slideNext()} 
            className={btnStyles}
        >
            <PiCaretRightBold style={iconStyles} />
        </button>
    </div>
  )
}

export default WorkSliderButtons