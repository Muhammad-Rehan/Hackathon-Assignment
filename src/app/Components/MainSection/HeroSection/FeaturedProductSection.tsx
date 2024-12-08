import {Josefin_Sans  } from 'next/font/google'
import Image from 'next/image';
const josefinSans = Josefin_Sans({
    subsets: ['latin-ext'],
    weight: '700'
})


export default function FeaturedProductSection() {
  const products = [
    {
      id: 1,
      name: "Cantilever chair",
      code: "YS52301",
      price: "$42.00",
      img: "/chair1.png",
    },
    {
      id: 2,
      name: "Cantilever chair",
      code: "YS52301",
      price: "$42.00",
      img: "/chair2.png",
      highlight: true,
    },
    {
      id: 3,
      name: "Cantilever chair",
      code: "YS52301",
      price: "$42.00",
      img: "/chair3.png",
    },
    {
      id: 4,
      name: "Cantilever chair",
      code: "YS52301",
      price: "$42.00",
      img: "/chair4.png",
    },
  ];

  return (
    <div className=" min-h-screen flex flex-col items-center py-10">
      <h1 className={`text-4xl font-bold text-[#1A0B5B] mb-8 ${josefinSans.className} font-bold`}>
        Featured Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 ">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative bg-white p-4 rounded-xl shadow-md w-[270px] h-[361px]  `}
          >
            <Image
            width={270}
            height={361}
              src={product.img}
              alt={product.name}
              className="w-full h-32 object-contain mb-4 "
            />
            <div className="flex flex-col justify-center items-center mt-24 gap-2 ">
              <h2 className="text-lg font-semibold text-pink-500">
                {product.name}
              </h2>
              <div className="flex justify-center space-x-2 ">
                <div className="w-[18px] h-[5px] bg-[#05E6B7] rounded-sm "></div>
                <div className="w-[18px] h-[5px] bg-[#F701A8] rounded-sm"></div>
                <div className="w-[18px] h-[5px] bg-[#00009D] rounded-sm"></div>
              </div>
              <p className="text-gray-500 text-sm mb-1">Code: {product.code}</p>
              <p className="text-gray-900 font-bold">{product.price}</p>
            </div>
            {product.highlight && (
              <button className="relative bottom-36 left-14 bg-green-500 text-white px-4 py-1 rounded-md">
                View Details
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8">
        <div className="flex justify-center space-x-2">
          <div className="w-8 h-2 bg-pink-500 rounded-[10px] "></div>
          <div className="w-6 h-2 bg-gray-300 rounded-[10px]"></div>
          <div className="w-6 h-2 bg-gray-300 rounded-[10px]"></div>
          <div className="w-6 h-2 bg-gray-300 rounded-[10px]"></div>
        </div>
      </div>
    </div>
  );
}
