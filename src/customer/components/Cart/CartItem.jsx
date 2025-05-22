import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

const CartItem = () => {
    const [quantity, setQuantity] = React.useState(3)

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }
    const handleIncrease = () => {
        setQuantity(quantity + 1)
    }

    return (
        <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-lg border border-gray-100 mb-6 transition-shadow duration-300 hover:shadow-xl">
            {/* Top: Image and Details */}
            <div className="flex flex-row items-start gap-6">
                {/* Product Image */}
                <div className="w-24 h-28 sm:w-28 sm:h-32 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                        className="w-full h-full object-cover object-top rounded-xl"
                        src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70"
                        alt="Men Slim Mid Rise Black Jeans"
                    />
                </div>
                {/* Product Info */}
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <p className="font-semibold text-lg sm:text-xl text-gray-900 mb-1">
                            Men Slim Mid Rise Black Jeans
                        </p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mb-1">
                            <span>Size: <span className="font-medium text-gray-700">L</span></span>
                            <span>Color: <span className="font-medium text-gray-700">White</span></span>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">
                            Seller: <span className="font-medium text-gray-600">Crishtaliyo 2fashion</span>
                        </p>
                        {/* Price Row */}
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-lg font-semibold text-gray-900">₹199</span>
                            <span className="text-gray-400 line-through text-base">₹211</span>
                            <span className="text-green-600 font-semibold text-base animate-pulse">5% Off</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom: Controls */}
            <div className="flex flex-wrap items-center gap-4 mt-6">
                {/* Quantity Controls */}
                <div className="flex items-center border-2 border-purple-200 rounded-lg bg-gray-50 px-4 py-2 shadow-sm">
                    <button
                        onClick={handleDecrease}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-purple-500 hover:bg-purple-50 active:scale-90 transition-all shadow-sm border border-transparent hover:border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
                        aria-label="Decrease quantity"
                    >
                        <RemoveCircleOutlineIcon fontSize="medium" />
                    </button>
                    <span className="mx-3 w-8 text-center text-lg font-bold text-gray-800 select-none">{quantity}</span>
                    <button
                        onClick={handleIncrease}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-purple-600 hover:bg-purple-50 active:scale-90 transition-all shadow-sm border border-transparent hover:border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
                        aria-label="Increase quantity"
                    >
                        <AddCircleOutlineIcon fontSize="medium" />
                    </button>
                </div>
                {/* Remove Button */}
                <button
                    className="relative text-purple-600 font-semibold px-6 py-2 rounded transition-all duration-200 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-purple-300 text-base tracking-wide shadow-sm overflow-hidden"
                >
                    <span className="relative z-10">REMOVE</span>
                    <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500 to-pink-500"></span>
                </button>
            </div>
        </div>
    )
}

export default CartItem