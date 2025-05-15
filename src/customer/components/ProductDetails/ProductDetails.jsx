import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { ProductReviewCard, hardcodedReviews } from './ProductReviewCard'
import { mens_kurta } from '../../../Data/Men/men_kurta'

const reviews = { average: 4.5, totalCount: 42807, reviewCount: 117, href: '#' }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
    // Use the first product from mens_kurta as the main product
    const product = mens_kurta[0];

    // Convert sizes to match your previous structure
    const sizes = product.size?.map(s => ({
        name: s.name,
        inStock: s.quantity > 0
    })) || [];

    const [selectedSize, setSelectedSize] = useState(sizes[0])
    const [currentImage, setCurrentImage] = useState(0)

    // If you want to support multiple images, you can add an images array to your mens_kurta data.
    // For now, we'll use just the main image.
    const images = product.images || [{ src: product.imageUrl, alt: product.title }];

    const prevImage = () => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    const nextImage = () => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))

    return (
        <div className="bg-gradient-to-br from-white to-gray-50 min-h-screen pb-20">
            <div className="max-w-[1600px] mx-auto px-2 sm:px-8 pt-12">
                {/* Product Section */}
                <section className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 md:p-16 flex flex-col lg:flex-row gap-16 mb-20 items-stretch">
                    {/* Image Gallery */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="relative w-full max-w-xl aspect-square bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center shadow-lg">
                            <button
                                onClick={prevImage}
                                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-2 shadow hover:bg-purple-100 transition"
                                aria-label="Previous image"
                            >
                                <span className="text-3xl font-bold text-purple-600">{'‹'}</span>
                            </button>
                            <img
                                src={images[currentImage].src}
                                alt={images[currentImage].alt}
                                className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
                            />
                            <button
                                onClick={nextImage}
                                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-2 shadow hover:bg-purple-100 transition"
                                aria-label="Next image"
                            >
                                <span className="text-3xl font-bold text-purple-600">{'›'}</span>
                            </button>
                        </div>
                        <div className="flex gap-2 mt-7 justify-center">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImage(idx)}
                                    className={classNames(
                                        "focus:outline-none rounded-lg border-2 transition",
                                        currentImage === idx ? "border-purple-500 ring-2 ring-purple-200" : "border-gray-200"
                                    )}
                                    aria-label={`Show image ${idx + 1}`}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Product Info */}
                    <div className="flex-1 flex flex-col justify-center">
                        <div>
                            <h2 className="text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">{product.brand}</h2>
                            <h1 className="text-3xl text-gray-700 mb-8">{product.title}</h1>
                            <div className="flex items-center space-x-8 mb-6">
                                <span className="text-4xl font-bold text-gray-900">₹{product.discountedPrice}</span>
                                <span className="text-2xl text-gray-400 line-through">₹{product.price}</span>
                                <span className="text-green-600 font-semibold text-xl">{product.discountPersent}% Off</span>
                            </div>
                            <div className="flex items-center mb-8">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                reviews.average > rating ? 'text-yellow-400' : 'text-gray-200',
                                                'h-7 w-7'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <span className="ml-4 text-gray-700 text-lg">{reviews.totalCount} Ratings</span>
                                <a href={reviews.href} className="ml-4 text-lg text-purple-600 hover:underline">{reviews.reviewCount} reviews</a>
                            </div>
                            {/* Size Selector */}
                            <div className="mb-10">
                                <h3 className="text-lg font-medium text-gray-900 mb-3">Size</h3>
                                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="flex gap-6">
                                    {sizes.map((size) => (
                                        <Radio
                                            key={size.name}
                                            value={size}
                                            disabled={!size.inStock}
                                            className={({ checked, disabled }) =>
                                                classNames(
                                                    'w-16 h-16 flex items-center justify-center rounded-md border text-xl font-semibold cursor-pointer transition',
                                                    checked ? 'border-purple-600 bg-purple-50 text-purple-700 shadow' : 'border-gray-300 bg-white text-gray-900',
                                                    disabled ? 'opacity-50 cursor-not-allowed' : ''
                                                )
                                            }
                                        >
                                            {size.name}
                                        </Radio>
                                    ))}
                                </RadioGroup>
                            </div>
                            {/* Add to Cart Button */}
                            <button
                                type="button"
                                className="w-full px-10 py-4 rounded-md bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold text-xl hover:from-purple-700 hover:to-purple-600 transition mb-10 shadow-lg"
                            >
                                ADD TO CART
                            </button>
                            {/* Description */}
                            <p className="text-gray-700 mb-10 text-lg">{product.description}</p>
                            {/* Highlights */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Highlights</h3>
                                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-base">
                                    <li>Hand cut and sewn locally</li>
                                    <li>Dyed with our proprietary colors</li>
                                    <li>Pre-washed & pre-shrunk</li>
                                    <li>Ultra-soft 100% cotton</li>
                                </ul>
                            </div>
                            {/* Details */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Details</h3>
                                <p className="text-gray-600 text-base">{product.description}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ratings & Reviews Section */}
                <section className="max-w-[1400px] mx-auto my-20 px-2 sm:px-8">
                    <h2 className="text-3xl font-bold mb-10">Recent Review & Ratings</h2>
                    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col md:flex-row gap-12">
                        {/* Left: Reviews */}
                        <div className="flex-1 min-h-[200px]">
                            {hardcodedReviews.map((review, idx) => (
                                <ProductReviewCard key={idx} review={review} />
                            ))}
                        </div>
                        {/* Right: Ratings Summary */}
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-4">Product Ratings</h3>
                            <div className="flex items-center mb-6">
                                <span className="flex text-yellow-400 mr-4">
                                    {[...Array(4)].map((_, i) => (
                                        <StarIcon key={i} className="h-7 w-7" />
                                    ))}
                                    <StarIcon className="h-7 w-7 text-yellow-300" />
                                </span>
                                <span className="text-gray-700 font-medium text-xl mr-4">{reviews.average}</span>
                                <span className="text-gray-400 text-lg">{reviews.totalCount} Ratings</span>
                            </div>
                            {/* Ratings Bars */}
                            <div className="space-y-4">
                                {[
                                    { label: "Excellent", color: "bg-green-600", value: 19259 },
                                    { label: "Very Good", color: "bg-green-400", value: 19259 },
                                    { label: "Good", color: "bg-blue-500", value: 19259 },
                                    { label: "Average", color: "bg-orange-500", value: 19259 },
                                    { label: "Poor", color: "bg-red-500", value: 19259 },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-center">
                                        <span className="w-28 text-base">{item.label}</span>
                                        <div className="flex-1 mx-3 bg-gray-200 rounded h-3">
                                            <div className={`${item.color} h-3 rounded`} style={{ width: "60%" }}></div>
                                        </div>
                                        <span className="text-gray-500 text-sm w-14 text-right">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Similar Products */}
                <section className="max-w-[1400px] mx-auto mt-20 px-2 sm:px-8">
                    <h2 className="text-3xl font-bold mb-10">Similar Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
                        {mens_kurta.map((item, idx) => (
                            <div
                                key={item.id || idx}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 p-6 flex flex-col items-center group"
                            >
                                <div className="w-full aspect-square bg-gray-50 rounded-lg overflow-hidden mb-5 flex items-center justify-center">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-200"
                                    />
                                </div>
                                <div className="w-full">
                                    <h3 className="text-xl font-semibold text-gray-900 truncate">{item.brand}</h3>
                                    <p className="text-gray-600 text-base truncate mb-2">{item.title}</p>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-2xl font-bold text-gray-900">₹{item.discountedPrice}</span>
                                        {item.price && (
                                            <span className="text-lg text-gray-400 line-through">₹{item.price}</span>
                                        )}
                                        {item.discountPersent && (
                                            <span className="text-green-600 font-semibold text-base">{item.discountPersent}% Off</span>
                                        )}
                                    </div>
                                    <button
                                        className="w-full mt-2 py-3 rounded-md bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold text-lg hover:from-purple-700 hover:to-purple-600 transition"
                                    >
                                        View Product
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
