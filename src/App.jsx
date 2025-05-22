import { useState } from 'react'

import './App.css'
import Navigation from './customer/components/navbar/Navigation'
import HomePage from './customer/pages/HomePage/HomePage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Cart from './customer/components/Cart/Cart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navigation />

        <div>
          {/* <HomePage /> */}
          {/* <Product /> */}
          {/* <ProductDetails /> */}
          <Cart />
        </div>
        <Footer />

      </div>



    </>
  )
}

export default App
//