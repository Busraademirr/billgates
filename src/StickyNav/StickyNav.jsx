import React from 'react'
import './StickyNav.css'
import { useState, useEffect } from 'react';

function StickyNav({count}) {


    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 260) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <div className={isSticky ? 'nav-body sticky' : 'nav-body'}>
           {count} $
        </div>
    )
}

export default StickyNav