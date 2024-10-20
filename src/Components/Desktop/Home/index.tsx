import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import './styles.scss'
import Modal from '../Modal'
import { userCartContext } from '../../../context/CartContext'
import Header from '../Header'
import Previewer from './mobilePreviewer'
// import product1 from './assets/image-product-1.jpg'
import product1 from '../../../assets/image-product-1.jpg'
import product2 from '../../../assets/image-product-2.jpg'
import product3 from '../../../assets/image-product-3.jpg'
import product4 from '../../../assets/image-product-4.jpg'
import thumbnail1 from '../../../assets/image-product-1-thumbnail.jpg'
import thumbnail2 from '../../../assets/image-product-2-thumbnail.jpg'
import thumbnail3 from '../../../assets/image-product-3-thumbnail.jpg'
import thumbnail4 from '../../../assets/image-product-4-thumbnail.jpg'

function Home() {

    const images:string[] = [product1, product2, product3, product4]
    const thumbnails:string[] = [thumbnail1, thumbnail2, thumbnail3, thumbnail4]
    const {product, incrementQuantity, decrementQuantity,addToCart} = userCartContext()
    const [showModal, setShowModal] = useState(false)
    const [imageIndex, setImageIndex] = useState(0)
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth<=768)

    

   useEffect(()=>{
    const handleResize =()=>{
        setIsSmallScreen(window.innerWidth<=768)
    }
    window.addEventListener('resize', handleResize)

    return ()=>window.removeEventListener('resize', handleResize)
   },[window.innerWidth])

    const handleThumbnailClick = (index: number) => {
        setImageIndex(index); // Set the main image
        setShowModal(true); // Open the modal
    };


    
  return (
    <>
    <Header/>
    <div className='divider'>
    </div>
    <div className='mainBody'>
        <div className='content'>
            {isSmallScreen && isSmallScreen?(
                <>
                <Previewer imageIndex={imageIndex} images={images}/>
                </>
            ):(
                <>
                    <div className='imgCont'>
                <img 
                src={images[imageIndex]} 
                className='images'
                id={`slide-${imageIndex}`}
                alt="productImage" 
                />
                <div className='thumbNailsContainer'> 
                {thumbnails&&thumbnails.map((thumbnail ,index)=>(
                    <>
                    <img 
                    className='thumbnails'
                    src={thumbnail} 
                    key={index}
                    onClick={()=>{
                        handleThumbnailClick(index)
                    }}
                    alt={`${thumbnails[index]}`} />
                    </> 
                ))}
                {showModal&&(
                    <>
                    <Modal
                    imageIndex={imageIndex}
                    images={images}
                    thumbnails={thumbnails}
                    onClose={()=>setShowModal(false)}
                    />
                    
                    </>

                )}
                </div>
                
           </div>
                </>
            )}
           
           <div className='summary'>
                <h3>sneaker company</h3>
                <h2>Fall Limited Edition <br />Sneakers</h2>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <div className='price'> 
                    <span className='priceTag'>$125.00</span>
                        <div className='discount'>
                            <span>50%</span>
                        </div>
                </div>
                <span className='crossed'>$250.00</span>
                <div className='btns'>
                    <div className='btns1'>
                        <FaMinus className='minus' onClick={decrementQuantity}/>
                        <h4>{product?.quantity||0}</h4>
                        <FaPlus className='plus' onClick={incrementQuantity}/>
                    </div> 
                   <button className='btns2'  onClick={addToCart}>
                    <BsCart3 size={16} color='#1D2025'/>
                    <span>Add to cart</span>
                   </button>
                </div>
           </div>
        </div>
    </div>
    </>
    
  )
}

export default Home