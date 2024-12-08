import {Josefin_Sans , Lato } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';
const josefinSans = Josefin_Sans({
    subsets: ['latin-ext'],
    weight: '700'
})
const lato = Lato({
    subsets:['latin'],
    weight: '400'
})


export default function LatestProducts() {
  const products = [
    {
      id: 1,
      name: "Cantilever chair",
      price: "$42.00",
      oldPrice: "$65.00",
      img: "/chair5.png"
    },
    {
      id: 2,
      name: "Cantilever chair",
      price: "$42.00",
      oldPrice: "$65.00",
      img: "/chair6.png"
    },
    {
      id: 3,
      name: "Cantilever chair",
      price: "$42.00",
      oldPrice: "$65.00",
      img: "/chair7.png"
    },
    {
      id: 4,
      name: "Cantilever chair",
      price: "$42.00",
      oldPrice: "$65.00",
      img: "/chair8.png"
    },
    {
      id: 5,
      name: "Cantilever chair",
      price: "$42.00",
      oldPrice: "$65.00",
      img: "/chair9.png"
    },
    {
      id: 6,
      name: "Cantilever chair",
      price: "$42.00",
      oldPrice: "$65.00",
      img: "/chair10.png"
    },
    
  ];

  return (
    <div className=" min-h-screen flex flex-col items-center">
      <h1 className={`text-[42px] font-bold text-[#1A0B5B] mb-8 ${josefinSans.className} font-bold`}>
        Leatest Products
      </h1>
      <ul className={`flex gap-10 justify-center items-center pb-10 ${lato.className} text-[18px]`}>
        <li className='text-[#FB2E86] underline'><Link href={''}>New Arrival</Link></li>
        <li className='text-[#151875]'><Link href={''}>Best Seller</Link></li>
        <li className='text-[#151875]'><Link href={''}>Featured</Link></li>
        <li className='text-[#151875]'><Link href={''}>Special Offer</Link></li>
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative bg-white p-4 rounded-xl shadow-md w-[360px] h-[306px]  `}
          >
            <Image
            width={380}
            height={380}
              src={product.img}
              alt={product.name}
              className="w-full h-32 object-contain mb-4 "
              
            />
            <div className={`flex  justify-between items-end mt-32 gap-2 ${josefinSans.className} `}>
              <h2 className="text-lg font-semibold text-[#151875]">
                {product.name}
              </h2>
              <div className='flex gap-2 '>
              <p className="text-[#151875] font-bold">{product.price}</p>
              <p className="text-[#FB2E86] text-sm mb-1">Code: {product.oldPrice}</p>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    
    </div>
  );
}
