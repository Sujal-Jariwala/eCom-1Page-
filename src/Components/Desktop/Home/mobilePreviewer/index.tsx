import React, { useState } from 'react'
import './styles.scss'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


type PreviewProps = {
    images: string[],
    imageIndex : number
}
function Previewer({images, imageIndex}: PreviewProps) {
    
    const [currentImageIndex, setCurrentImageIndex] = useState(imageIndex)

    const handleNextPrev = (val:-1|1)=>{
        setCurrentImageIndex((ps)=>{
            return (ps+val+images.length) % images.length
        })
    }
  return (
    <div className='previewerMain'>
        <div className='imgSlider'>
            
        <img key={currentImageIndex} src={images[currentImageIndex]} alt="productImage" />

        </div>
        <div className='prevImg'>
            <IoIosArrowBack size={16} style={{
                strokeWidth: '30px'
            }} onClick={()=>handleNextPrev(-1)}/>
        </div>
        <div className='nextImg'>
            <IoIosArrowForward size={16} style={{
                strokeWidth: '30px'
            }} onClick={()=>handleNextPrev(1)}/>
        </div>
        
    </div>
  )
}

export default Previewer