import { useState } from 'react'

import './App.css'
import Navigation from './customer/components/navbar/Navigation'
import HomePage from './customer/pages/HomePage/HomePage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navigation />

        <div>
          {/* <HomePage /> */}
          <Product />
        </div>
        <Footer />

      </div>



    </>
  )
}

export default App
//