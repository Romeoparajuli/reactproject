import React from 'react'
import CartItem from './CartItem'


const Cart = () => {
    return (
        <div>
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <CartItem />
            </div>
            <div className='px-5 sticky top-0 h-[100vh]mt-5 lg:mt-0'>

            </div>
        </div>
    )
}

export default Cart