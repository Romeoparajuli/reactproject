import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { ProductReviewCard, hardcodedReviews } from './ProductReviewCard'

const product = {
    brand: 'SPOQUE',
    title: 'Men Solid Pure Cotton Straight Kurta',
    price: '₹362',
    oldPrice: '₹1499',
    discountPercent: 75,
    images: [
        { src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg', alt: 'Kurta front' },
        { src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg', alt: 'Kurta black' },
        { src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg', alt: 'Kurta gray' },
        { src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg', alt: 'Kurta white' },
    ],
    sizes: [
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
    ],
    description: 'A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { average: 4.5, totalCount: 42807, reviewCount: 117, href: '#' }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
    const [selectedSize, setSelectedSize] = useState(product.sizes[0])
    const [currentImage, setCurrentImage] = useState(0)

    const prevImage = () => setCurrentImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))
    const nextImage = () => setCurrentImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))

    return (
        <div className="bg-gradient-to-br from-white to-gray-50 min-h-screen pb-16">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 pt-10">
                {/* Product Section */}
                <section className="bg-white rounded-3xl shadow-2xl p-8 md:p-14 flex flex-col lg:flex-row gap-14 mb-16 items-stretch">
                    {/* Image Gallery */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="relative w-full max-w-lg aspect-square bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center shadow-lg">
                            <button
                                onClick={prevImage}
                                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-2 shadow hover:bg-purple-100 transition"
                                aria-label="Previous image"
                            >
                                <span className="text-2xl font-bold text-purple-600">{'‹'}</span>
                            </button>
                            <img
                                src={product.images[currentImage].src}
                                alt={product.images[currentImage].alt}
                                className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
                            />
                            <button
                                onClick={nextImage}
                                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-2 shadow hover:bg-purple-100 transition"
                                aria-label="Next image"
                            >
                                <span className="text-2xl font-bold text-purple-600">{'›'}</span>
                            </button>
                        </div>
                        <div className="flex gap-3 mt-6 justify-center">
                            {product.images.map((img, idx) => (
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
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Product Info */}
                    <div className="flex-1 flex flex-col justify-center">
                        <div>
                            <h2 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">{product.brand}</h2>
                            <h1 className="text-2xl text-gray-700 mb-6">{product.title}</h1>
                            <div className="flex items-center space-x-6 mb-4">
                                <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                                <span className="text-xl text-gray-400 line-through">{product.oldPrice}</span>
                                <span className="text-green-600 font-semibold text-lg">{product.discountPercent}% Off</span>
                            </div>
                            <div className="flex items-center mb-6">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                reviews.average > rating ? 'text-yellow-400' : 'text-gray-200',
                                                'h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <span className="ml-3 text-gray-700 text-base">{reviews.totalCount} Ratings</span>
                                <a href={reviews.href} className="ml-3 text-base text-purple-600 hover:underline">{reviews.reviewCount} reviews</a>
                            </div>
                            {/* Size Selector */}
                            <div className="mb-8">
                                <h3 className="text-base font-medium text-gray-900 mb-3">Size</h3>
                                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="flex gap-5">
                                    {product.sizes.map((size) => (
                                        <Radio
                                            key={size.name}
                                            value={size}
                                            disabled={!size.inStock}
                                            className={({ checked, disabled }) =>
                                                classNames(
                                                    'w-14 h-14 flex items-center justify-center rounded-md border text-lg font-semibold cursor-pointer transition',
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
                                className="px-10 py-3 rounded-md bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold text-lg hover:from-purple-700 hover:to-purple-600 transition mb-8 shadow-lg"
                            >
                                ADD TO CART
                            </button>
                            {/* Description */}
                            <p className="text-gray-700 mb-8 text-base">{product.description}</p>
                            {/* Highlights */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Highlights</h3>
                                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-base">
                                    {product.highlights.map((highlight) => (
                                        <li key={highlight}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                            {/* Details */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Details</h3>
                                <p className="text-gray-600 text-base">{product.details}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ratings & Reviews Section */}
                <section className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6">Recent Review & Ratings</h2>
                    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-10">
                        {/* Left: Reviews */}
                        <div className="flex-1 min-h-[200px]">
                            {hardcodedReviews.map((review, idx) => (
                                <ProductReviewCard key={idx} review={review} />
                            ))}
                        </div>
                        {/* Right: Ratings Summary */}
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-3">Product Ratings</h3>
                            <div className="flex items-center mb-4">
                                <span className="flex text-yellow-400 mr-3">
                                    {[...Array(4)].map((_, i) => (
                                        <StarIcon key={i} className="h-6 w-6" />
                                    ))}
                                    <StarIcon className="h-6 w-6 text-yellow-300" />
                                </span>
                                <span className="text-gray-700 font-medium text-lg mr-3">{reviews.average}</span>
                                <span className="text-gray-400 text-base">{reviews.totalCount} Ratings</span>
                            </div>
                            {/* Ratings Bars */}
                            <div className="space-y-3">
                                {[
                                    { label: "Excellent", color: "bg-green-600", value: 19259 },
                                    { label: "Very Good", color: "bg-green-400", value: 19259 },
                                    { label: "Good", color: "bg-yellow-400", value: 19259 },
                                    { label: "Average", color: "bg-yellow-800", value: 19259 },
                                    { label: "Poor", color: "bg-red-500", value: 19259 },
                                ].map((item, idx) => (
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
            </div>
        </div>
    )
}
