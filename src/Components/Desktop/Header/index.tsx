import React, { useCallback, useEffect, useState } from 'react'
import logo from '../../../assets/logo.svg'
import './styles.scss'
import { BsCart3 } from "react-icons/bs";
import { userCartContext } from '../../../context/CartContext';
import Cart from '../Cart';
import SideBar from './mobileSideBar';

interface GithubUserData {
  avatar_url?: string;
  [key: string]: any; // You can specify more keys based on the API response structure
}

function Header() {

const [data, setData] = useState<GithubUserData | null>(null);
const [showCart, setShowCart] = useState(false)
const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth<=768)
const [showSideBar, setSHowSideBar] = useState(false)

useEffect(()=>{
  const handleResize = ()=>{
    setIsSmallScreen(window.innerWidth<=768)
  }
  window.addEventListener('resize', handleResize)

  return ()=> window.removeEventListener('resize', handleResize)
} ,[window.innerWidth])


  const {product} =userCartContext()
useEffect(() => {
    let callCount = 0;

    const fetchData = () => {
      if (callCount <= 2) {
        fetch(`https://api.github.com/users/Sujal-Jariwala`)
          .then((res) => res.json())
          .then((res) => setData(res));

        callCount += 1;
      }
    };

    fetchData();
  }, []); 
console.log(data);

return (
    <>
    <header className='headerMain'>
        <div className='left-section'>
        {isSmallScreen&&isSmallScreen?(
          <>
          {showSideBar &&(<SideBar onClose={()=>setSHowSideBar(false)}/>)}
          <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg" className='menu' onClick={()=>setSHowSideBar(true)}><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/></svg>
          <img src={logo} alt="" />
          
          </>
        ):(
          <>
            <img src={logo} alt="logo" />
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
          </>
        )}
            
        </div>
        <div className='right-section'>
          <div className='cartContainer'>
          <BsCart3 size={22} className='cartIcon' onClick={()=>setShowCart(true)}/>
              {product&&product?.quantity>0?(
                <>
                <div className='cartQuantity'>
                <span className='quantity'>{product?.quantity||0}</span>
                </div>
                </>
              ):(
                <>
                </>
              )}
          </div>
            {showCart&&(
              <Cart
              onClose={()=>setShowCart(false)}
              />
            )}
            <a target='_blank' href="https://github.com/Sujal-Jariwala">
            <img src={data?.avatar_url|| undefined} alt="avatar" className='avatar' title='My Github Profile'/>
            </a>
            
        </div>
    </header>
    
    </>
  )
}

export default Header