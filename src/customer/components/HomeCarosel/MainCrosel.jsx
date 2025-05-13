import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCroselData } from './MainCrosData';

const MainCrosel = () => {
    const items = mainCroselData.map((item, index) => (
        <div key={index} className="h-[400px] w-full overflow-hidden">
            <img
                src={item.image}
                alt={`carousel-${index}`}
                className="h-full w-full object-cover"
                role="presentation"
            />
        </div>
    ));

    return (
        <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            autoPlayInterval={3000}
            infinite
            disableButtonsControls
        />
    );
};

export default MainCrosel;
