import React from 'react'
import MainCrosel from '../../components/HomeCarosel/MainCrosel'
import HomeSectionCrosel from '../../components/HomeSectionCrosel/HomeSectionCrosel'
import { mens_kurta } from '../../../Data/Men/men_kurta'

const HomePage = () => {
    return (
        <div>
            <MainCrosel />

            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCrosel data={mens_kurta} sectionName={"Mens's Kurta"} />
                <HomeSectionCrosel data={mens_kurta} sectionName={"Men's shoes"} />
                <HomeSectionCrosel data={mens_kurta} sectionName={"Men's shirt"} />
                <HomeSectionCrosel data={mens_kurta} sectionName={"Women's  Saree"} />
                <HomeSectionCrosel data={mens_kurta} sectionName={"Women's Dress"} />
                <HomeSectionCrosel data={mens_kurta} sectionName={"Womens's shoes"} />

            </div>
        </div>

    )
}

export default HomePage
