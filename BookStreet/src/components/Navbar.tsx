import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaEnvira, FaXmark } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";

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

    //NavItems

    const navItems = [
        {link: 'Home', path:'/'},
        {link: 'About', path:'/About'},
        {link: 'Blog', path:'/Blog'},
        {link: 'Publish', path:'/admin/dashboard'},
        // {link: 'Cart', path:'/Cart'},
    ];

  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-cyan-300" : "bg-indigo-200"}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                {/* {logo} */}
                <Link to="/" className='text-2x1 font-bold text-beige flex item-center gap-2'><FaEnvira className='inline-block' />BookStreet</Link>
                {/* nav items large */}
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map((item)=> <Link key={item.path} to={item.path} className='block text-base text-black uppercase curser-pointer hover:text-blue-700'>{item.link}</Link>)
                    }
                {/* <Link key='Cart' to="/Cart"><FaShoppingCart className='inline-block curser-pointer' /></Link> */}
                </ul>

                {/* cart */}
                <div className='space-x-12 items-center right-0'>
                    <Link key='Cart' to="/Cart"><CiShoppingCart className='w-5 hover:text-orange-900' /></Link>
                </div>

                {/* btn for lg */}
                <div className='space-x-12 hidden lg:flex items-center'>
                    <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
                </div>

                {/* menu for mobile */}
                <div className='md:hidden'>
                    <button className='text-black focus:outline-none' onClick={toggleMenu}>
                        {
                            isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text-black'/>
                        }
                    </button>
                </div>

                {/* nav for sm devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map((item)=> <Link key={item.path} to={item.path} className='block text-base text-white uppercase curser-pointer hover:text-black'>{item.link}</Link>)
                    }
                </div>

            </div>
        </nav>
    </header>
  )
}

export default Navbar