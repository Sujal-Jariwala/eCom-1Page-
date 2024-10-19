import { useState } from 'react'
import './App.css'
import Home from './Components/Desktop/Home/index'
import { ComponentPropsType } from './types'
import product1 from './assets/image-product-1.jpg'
import product2 from './assets/image-product-2.jpg'
import product3 from './assets/image-product-3.jpg'
import product4 from './assets/image-product-4.jpg'
import thumbnail1 from './assets/image-product-1-thumbnail.jpg'
import thumbnail2 from './assets/image-product-2-thumbnail.jpg'
import thumbnail3 from './assets/image-product-3-thumbnail.jpg'
import thumbnail4 from './assets/image-product-4-thumbnail.jpg'

function App() {
  const [count, setCount] = useState(0)

  
    const images = [product1, product2, product3, product4]
    const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4]
  return (
    <>
    <main className='container'>
        <Home images={images} thumbnails={thumbnails}/>
    </main>
    
    </>
  )
}

export default App;
