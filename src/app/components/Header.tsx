import Link from 'next/link'
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { RiAccountCircleLine } from "react-icons/ri";
import { SheetSide } from "./sheets";
import { NavigationMenuDemo } from './NavigationMenu';
const Header = () => {
  return (
 <header className='w-full h-[70px] flex justify-between items-center'>
    <div className='flex justify-center items-center'>
        <SheetSide/>
        <h3 className='text-2xl ml-10 sm:text-3xl font-bold pl-2'>SHOP.CO</h3>
    </div>

    {/*Navbar*/}
    <ul className='hidden md:block'>
        <li className='space-x-8 flex items-center'>
            <Link href={""}> <NavigationMenuDemo /></Link>
            <Link href={""}>On Sale</Link>
            <Link href={""}>New Arrivals</Link>
            <Link href={""}>Brands</Link>
        </li>
    </ul>
    {/*Search Bar*/}
          <div className='hidden md:block'>
              <div className='flex justify-start items-center w-[577px] h-[48px] rounded-[62px]  bg-[#F0F0F0] '>
                  <div className='text-xl ml-4'><FaSearch /></div>
                  <input className='ml-3 bg-[#F0F0F0] w-full h-full outline-none rounded-[62px]' placeholder='Search for Products....'></input>
              </div>
          </div>

        <div className='flex mr-10 space-x-3 text-xl'>
        <div className='text-xl ml-4 md:hidden'><FaSearch /></div>
    {/*cart*/}
        <div>
            <LuShoppingCart />
        </div>    

    {/*Account*/}
        <div>
            <RiAccountCircleLine />
        </div>    
        </div>
 </header>
  )
}

export default Header
