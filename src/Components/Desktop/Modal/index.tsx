import React, { useState } from 'react'
import { ComponentPropsType } from '../../../types'
import './styles.scss'
import { RxCross2 } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


interface ModalProps{
  imageIndex:number;
  images:string[]
  thumbnails:string[]
  onClose():void
}
function Modal({imageIndex, images, thumbnails, onClose}:ModalProps) {

  const [currentImageIndex, setCurrentImageIndex] = useState(imageIndex)

  const handleNextPrev = (val:-1|1)=>{
    setCurrentImageIndex((ps)=>{
      return (ps+val+images.length)%images.length
    })
  }

  const handleThumbnailClick = (index:number)=>{
    setCurrentImageIndex(index)
  }





  return (
    
    <>
    <div className='modalWrapper' onClick={onClose}></div>
    <div className='modalContainer'>
        <div className='imgCont'>
        <img src={images[currentImageIndex]} alt="image" />
        <RxCross2 
        onClick={onClose}
        size={30} 
        className='cross'/>
        <div className='arrowBackCont'>
        <IoIosArrowBack size={26} onClick={()=>handleNextPrev(-1)} className='arrowBack'/>
        </div>
        <div className='arrowNextCont'>
        <IoIosArrowForward size={26} onClick={()=>handleNextPrev(1)} className='arrowNext'/>
        </div>
        </div>
        <div className='thumbnailsCont'>
        {thumbnails&&thumbnails.map((thumbnail, index)=>(
          <>
              <img 
              key={index}
              src={thumbnail} 
              onClick={()=>handleThumbnailClick(index)}
              alt="" />
            
          </>
        ))}
    </div> 
    </div>
       
    </>
  )
}

export default Modal