import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false);
    const[isSticky, setIsSticky] = useState(false);

    //toggle
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY > 100){
                setIsSticky(true)
            }
            else{
                setIsSticky(false)
            }
        }
        return ()=>{
            window.addEventListener("scroll",handleScroll);
        }     
    },[])


  return (
    <div>Navbar</div>
  )
}

export default Navbar