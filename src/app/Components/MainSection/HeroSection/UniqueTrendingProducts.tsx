
import Image from "next/image";
import React from "react";

import {Josefin_Sans , Lato } from 'next/font/google'
const josefinSans = Josefin_Sans({
    subsets: ['latin-ext'],
    weight: '700'
})
const lato = Lato({
    subsets:['latin'],
    weight: '400'
})


const UniqueTrendingProducts = () => {
  return <div className="h-[579px] bg-[#F1F0FF]">
    <div className="flex justify-around items-center ml-20 pt-5">
        <div className=" w-[481px] h-[440.3px]  shadow-[#f3d6fd] bg-[#F5E1FC] shadow rounded-full">
            <Image src={'/safastylish.png'} width={509} height={550} alt="stylish-Sofa" />
        </div>
        <div className="flex flex-col gap-5">
            <h1 className={`text-[151875] ${josefinSans.className} text-[35px] font-bold w-[507px] h-[92px]`}>Unique Features Of leatest & Trending Poducts</h1>
            <ul className={`flex flex-col gap-8 ${lato.className} text-[16px] w-[461px]`} >
                <li className="flex items-center justify-start gap-2"><div className="w-2 h-2 bg-[#F2B] rounded-full"></div><p>All frames constructed with hardwood solids and laminates</p></li>
                <li className="flex items-center justify-start gap-2"><div className="w-2 h-2 bg-[#F2B] rounded-full"></div><p>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p></li>
                <li className="flex items-center justify-start gap-2"><div className="w-2 h-2 bg-[#F2B] rounded-full"></div><p>All frames constructed with hardwood solids and laminates</p></li>
            </ul>
            <div className="flex gap-10">
            <button className={`w-[157px] h-[45px] rounded-sm  bg-[#FB2E86] p-5 flex justify-center items-center text-white font-semibold text-[17px] ${josefinSans.className}`}>Add To Cart</button>
            <div >
            <h5 className={`${josefinSans.className} text-[#151875]`}>B&B Italian Sofa</h5>
            <p className={`${lato.className} text-[#151875]`}>$32.00</p>
            </div>
            </div>
        </div>
    </div>
  </div>;
};

export default UniqueTrendingProducts;
