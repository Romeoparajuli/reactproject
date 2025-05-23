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
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 mb-8 px-6 py-5 transition-all">
            <div className="flex flex-row items-start gap-6">
                {/* Product Image */}
                <div className="w-28 h-32 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                        className="w-full h-full object-cover object-top rounded-xl"
                        src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70"
                        alt="Men Slim Mid Rise Black Jeans"
                    />
                </div>
                {/* Product Info */}
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <p className="font-semibold text-xl text-gray-900 mb-1">
                            Men Slim Mid Rise Black Jeans
                        </p>
                        <div className="flex flex-wrap gap-x-6 gap-y-1 text-base text-gray-500 mb-1">
                            <span>Size: <span className="font-medium text-gray-700">L</span></span>
                            <span>Color: <span className="font-medium text-gray-700">White</span></span>
                        </div>
                        <p className="text-base text-gray-400 mb-2">
                            Seller: <span className="font-medium text-gray-600">Crishtaliyo 2fashion</span>
                        </p>
                        {/* Price Row */}
                        <div className="flex items-center gap-3 mt-2">
                            <span className="text-xl font-semibold text-gray-900">₹199</span>
                            <span className="text-gray-400 line-through text-lg">₹211</span>
                            <span className="text-green-600 font-semibold text-lg">5% Off</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Controls Row */}
            <div className="flex flex-row items-center gap-6 mt-6 pl-1">
                {/* Quantity Controls */}
                <div className="flex items-center border-2 border-purple-200 rounded-lg bg-gray-50 px-4 py-2 shadow-sm">
                    <button
                        onClick={handleDecrease}
                        className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-purple-500 hover:bg-purple-100 active:scale-95 transition-all shadow-sm border border-transparent hover:border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
                        aria-label="Decrease quantity"
                    >
                        <RemoveCircleOutlineIcon fontSize="medium" />
                    </button>
                    <span className="mx-4 w-8 text-center text-lg font-bold text-gray-800 select-none">{quantity}</span>
                    <button
                        onClick={handleIncrease}
                        className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-purple-600 hover:bg-purple-100 active:scale-95 transition-all shadow-sm border border-transparent hover:border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
                        aria-label="Increase quantity"
                    >
                        <AddCircleOutlineIcon fontSize="medium" />
                    </button>
                </div>
                {/* Remove Button */}
                <button
                    className="ml-2 text-purple-600 font-semibold px-6 py-2 rounded-lg bg-purple-50 hover:bg-purple-100 active:scale-95 transition-all text-base shadow-sm border border-transparent hover:border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                    REMOVE
                </button>
            </div>
        </div>
    )
}

export default CartItem