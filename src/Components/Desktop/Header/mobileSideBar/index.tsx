import React, { useEffect, useState } from 'react'
import './styles.scss'

type SideBarProps = {
    onClose(): void
}

function SideBar({ onClose }: SideBarProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        
        // Set isOpen to true after a short delay to trigger the animation
        const timer = setTimeout(() => setIsOpen(true), 50);

        return () => {
            document.body.style.overflowY = "scroll";
            clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        // Delay the onClose callback to allow the closing animation to play
        setTimeout(onClose, 300); // 300ms matches the transition duration
    };

    return (
        <>
            <div className={`sideBarWrapper ${isOpen ? 'open' : ''}`}>
                <div className={`sideBarContainer ${isOpen ? 'open' : ''}`}>
                    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" onClick={handleClose}>
                        <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd"/>
                    </svg>
                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideBar