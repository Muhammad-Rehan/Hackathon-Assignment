import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TopHeader = () => {
  return (
    <div className='h-[44px] bg-[#7E33E0] flex justify-around text-white'>
        <div className='flex justify-center items-center   '>    
        <div className='flex justify-center items-center gap-2'>
            <Image src={'/envelope.png'} width={16} height={16} alt='email-icon'  />
            <p>mhhasanul@gmail.com</p>
            <div className='flex justify-center items-center gap-2 pl-20 '>
            <Image src={'/phone.png'} width={16} height={16} alt='phone-icon'  />
            <p>(12345)67890</p>
        </div>
        </div>
        </div>
        
        <ul className='flex justify-center items-center gap-5'>
            <div className='flex justify-center items-center gap-1'>
            <li><Link href={''}>English</Link></li>
            <Image src={'/dropdown.png'} width={16} height={16} alt='dropdown-icon'/>
            </div>
            <div className='flex justify-center items-center gap-1'>
            <li><Link href={''}>USD</Link></li>
            <Image src={'/dropdown.png'} width={16} height={16} alt='dropdown-icon'/>
            </div>
            <div className='flex justify-center items-center gap-1'>
            <li><Link href={''}>Login</Link></li>
            <Image src={'/user.png'} width={16} height={16} alt='user-icon'/>
            </div>
            <div className='flex justify-center items-center gap-1'>
            <li><Link href={''}>Wishist</Link></li>
            <Image src={'/heart.png'} width={16} height={16} alt='heart-icon'/>
            </div>
            <div>
            <Image src={'/cart.png'} width={24} height={24} alt='cart-icon'/>
            </div>
        </ul>
        
    </div>
  )
}

export default TopHeader