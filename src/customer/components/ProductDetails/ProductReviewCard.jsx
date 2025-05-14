import { StarIcon } from '@heroicons/react/20/solid'

export function ProductReviewCard({ review }) {
    return (
        <div className="flex gap-4 py-5 border-b last:border-b-0">
            {/* Avatar */}
            <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white text-xl font-bold uppercase">
                    {review.user[0]}
                </div>
            </div>
            {/* Review Content */}
            <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                    <span className="font-semibold text-gray-900">{review.user}</span>
                    <span className="text-gray-400 text-xs sm:ml-3">{review.date}</span>
                </div>
                <div className="flex items-center mt-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                        <StarIcon
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(review.rating) ? "text-yellow-400" : i < review.rating ? "text-yellow-300" : "text-gray-200"}`}
                        />
                    ))}
                </div>
                <div className="text-gray-700 text-sm">{review.comment}</div>
            </div>
        </div>
    )
}

// Hardcoded reviews array
export const hardcodedReviews = [
    {
        user: "Raam",
        date: "April 5, 2023",
        rating: 4.5,
        comment: "Nice product, I love this shirt!"
    },
    {
        user: "Sita",
        date: "May 12, 2023",
        rating: 5,
        comment: "Super comfortable and fits perfectly. Highly recommend!"
    },
    {
        user: "Alex",
        date: "June 1, 2023",
        rating: 4,
        comment: "Good quality for the price. Would buy again."
    },
    {
        user: "Priya",
        date: "June 10, 2023",
        rating: 3.5,
        comment: "Fabric is nice but the color is a bit different than shown."
    },
    {
        user: "John",
        date: "July 2, 2023",
        rating: 5,
        comment: "Absolutely loved it! Fast delivery and great packaging."
    }
]