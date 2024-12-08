import {Josefin_Sans , Lato } from 'next/font/google'
import Image from 'next/image';
const josefinSans = Josefin_Sans({
    subsets: ['latin-ext'],
    weight: '700'
})
const lato = Lato({
    subsets:['latin'],
    weight: '400'
})


export default function TrendingProducts() {
  const products = [
    {
      id: 1,
      name: "Cantilever chair",
      price: "$26.00",
      oldPrice:"$42.00",
      img: "/image 1171.png",
    },
    {
      id: 2,
      name: "Cantilever chair",
      price: "$26.00",
      oldPrice:"$42.00",
      img: "/image 1170.png",
    },
    {
      id: 3,
      name: "Cantilever chair",
      price: "$26.00",
      oldPrice:"$42.00",
      img: "/image 32.png",
    },
    {
      id: 4,
      name: "Cantilever chair",
      price: "$26.00",
      oldPrice:"$42.00",
      img: "/image 31.png",
    },
  ];

  return (
    <div className=" min-h-screen flex flex-col items-center py-10">
      <h1 className={`text-4xl font-bold text-[#1A0B5B] mb-8 ${josefinSans.className} font-bold`}>
        Trending Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 ">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative bg-white p-4 rounded-xl shadow-md w-[270px] h-[361px]  `}
          >
            <Image
            width={171}
            height={171}
              src={product.img}
              alt={product.name}
              className="w-[247px] h-[244px] object-contain mb-4 bg-[#F5F6F8] "
            />
            <div className="flex flex-col justify-center items-center mt-5 gap-2 ">
              <h2 className={`text-lg font-semibold text-pink-500 ${lato.className}`}>
                {product.name}
              </h2>
              <div className={`flex gap-2 ${josefinSans.className}`}>
              <p className="text-[#151875] font-bold">{product.price}</p>
              <p className="text-gray-400 font-bold line-through">{product.oldPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
