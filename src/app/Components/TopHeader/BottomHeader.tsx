import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import {Josefin_Sans , Lato } from 'next/font/google'
const josefinSans = Josefin_Sans({
    subsets: ['latin-ext'],
    weight: '700'
})
const lato = Lato({
    subsets:['latin'],
    weight: '400'
})

const BottomHeader = () => {
  return (
    <div className='h-[80px]  w-[1177px] m-auto pt-3'>
        <div className='flex ml-10 gap-32 items-center   '>
            <Link className={`text-[34px] font-bold ${josefinSans.className}`} href={''}>Hekto</Link>
            <div>
            <ul className='flex items-center justify-center gap-8'>
                <div className={`flex items-center justify-center text-[#FB2E86]`}>
                <li className={`${lato.className} text-[16px] `}><Link href={''}>Home</Link></li>
                <Image src={'/dropdown-pink.png'} width={12} height={12} alt='dropdown-icon'/>
                </div>
                <li className={`${lato.className} text-[16px] `}><Link href={''}>Pages</Link></li>
                <li className={`${lato.className} text-[16px] `}><Link href={''}>Products</Link></li>
                <li className={`${lato.className} text-[16px] `}><Link href={''}>Blog</Link></li>
                <li className={`${lato.className} text-[16px] `}><Link href={''}>Shop</Link></li>
                <li className={`${lato.className} text-[16px] `}><Link href={''}>Contact</Link></li>
            <div className='flex ml-[72px]'>
                <input type="search" className='outline-1 border-2 w-[260px] h-[40px]' />
                <button className='w-[51px] h-[40px] bg-[#FB2E86] flex justify-center items-center'><Image src={'/search.png'} width={24} height={24} alt='search-icon'/></button>
            </div>
            </ul>
        </div>
        </div>
        
    </div>
  )
}

export default BottomHeader