import React from 'react'
import CartItem from './CartItem'

const Cart = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-2 sm:px-4">
                {/* Cart Items */}
                <div className="col-span-2">
                    <CartItem />
                    <CartItem />
                </div>
                {/* Price Details */}
                <div className="lg:sticky lg:top-6 self-start w-full">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 mb-4 lg:mb-0
                        flex flex-col
                        transition-all duration-300
                        ">
                        <p className="uppercase font-bold opacity-60 pb-4 text-lg tracking-wider">Price Details</p>
                        <hr className="mb-4" />
                        <div className="space-y-4 font-semibold text-base">
                            <div className="flex justify-between text-black">
                                <p>Price</p>
                                <p>₹4697</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Discount</p>
                                <p className="text-green-600">-₹3419</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Delivery Charge</p>
                                <p className="text-green-600">Free</p>
                            </div>
                            <hr />
                            <div className="flex justify-between text-lg font-bold">
                                <p>Total Amount</p>
                                <p className="text-green-600">₹1278</p>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="w-full mt-8 px-10 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold text-xl shadow-lg
                                hover:from-pink-500 hover:to-purple-600
                                focus:outline-none focus:ring-4 focus:ring-purple-300
                                active:scale-95
                                transition-all duration-200
                                animate-bounce-once
                            "
                            style={{
                                animation: 'bounce 0.7s 1'
                            }}
                        >
                            CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile sticky checkout */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl rounded-t-2xl border-t border-gray-200 p-4 flex flex-col items-center gap-2 lg:hidden">
                <div className="flex justify-between w-full max-w-lg mx-auto font-bold text-lg">
                    <span>Total:</span>
                    <span className="text-green-600">₹1278</span>
                </div>
                <button
                    type="button"
                    className="w-full max-w-lg mx-auto px-10 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold text-xl shadow-lg
                        hover:from-pink-500 hover:to-purple-600
                        focus:outline-none focus:ring-4 focus:ring-purple-300
                        active:scale-95
                        transition-all duration-200
                    "
                >
                    CHECKOUT
                </button>
            </div>
            <style>
                {`
                @keyframes bounce {
                    0% { transform: scale(1);}
                    30% { transform: scale(1.08);}
                    60% { transform: scale(0.97);}
                    100% { transform: scale(1);}
                }
                .animate-bounce-once {
                    animation: bounce 0.7s 1;
                }
                `}
            </style>
        </div>
    )
}

export default Cart