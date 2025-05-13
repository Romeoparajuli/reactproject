import React, { useRef, useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from '@mui/material';


const HomeSectionCrosel = ({data,sectionName}) => {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(1);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    // Keep it simple
    const items = data.slice(0, 10).map((item )=> <HomeSectionCard product={item}/>);
    // Update visibleCount based on screen width
    const updateVisibleCount = () => {
        const width = window.innerWidth;
        if (width >= 1024) setVisibleCount(5);
        else if (width >= 720) setVisibleCount(3);
        else setVisibleCount(1);
    };

    useEffect(() => {
        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);
        return () => window.removeEventListener('resize', updateVisibleCount);
    }, []);

    const handleSlideChanged = (e) => {
        setCurrentIndex(e.item);
    };

    return (
        <div className="relative px-6 lg:px-12 py-8 bg-gray-50 overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 py-5">
                {sectionName}
            </h2> 

            <div className="relative">
                {/* Left Arrow */}
                {currentIndex > 0 && (
                    <Button
                        className="!absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:shadow-lg"
                        variant="contained"
                        sx={{
                            bgcolor: 'white',
                            color: 'black',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            minWidth: 'unset',
                        }}
                        onClick={() => carouselRef.current?.slidePrev()}
                        aria-label="previous"
                    >
                        <KeyboardArrowLeftIcon />
                    </Button>
                )}

                {/* Carousel */}
                <div className="px-10">
                    <AliceCarousel
                        mouseTracking
                        items={items}
                        responsive={responsive}
                        infinite={false}
                        disableButtonsControls
                        disableDotsControls
                        onSlideChanged={handleSlideChanged}
                        ref={carouselRef}
                    />
                </div>

                {/* Right Arrow */}
                {currentIndex < items.length - visibleCount && (
                    <Button
                        className="!absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:shadow-lg"
                        variant="contained"
                        sx={{
                            bgcolor: 'white',
                            color: 'black',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            minWidth: 'unset',
                        }}
                        onClick={() => carouselRef.current?.slideNext()}
                        aria-label="next"
                    >
                        <KeyboardArrowRightIcon />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCrosel;
