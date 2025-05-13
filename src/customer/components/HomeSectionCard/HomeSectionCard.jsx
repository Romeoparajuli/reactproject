import React from 'react';

const HomeSectionCard = ({ product }) => {
    return (
        <div className="cursor-pointer flex flex-col items-center bg-white shadow-md rounded-xl hover:shadow-xl transition-transform duration-300 w-[15rem] mx-auto transform hover:-translate-y-2">
            {/* Image Section */}
            <div className="h-[12rem] w-full overflow-hidden rounded-t-xl relative group">
                <img
                    src={product.imageUrl}
                    alt="Category"
                    className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            {/* Text Section */}
            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {product.brand}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                    {product.title}
                </p>
            </div>
        </div>
    );
};

export default HomeSectionCard;
