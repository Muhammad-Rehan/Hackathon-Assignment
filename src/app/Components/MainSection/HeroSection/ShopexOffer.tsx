import {Josefin_Sans  } from 'next/font/google'
import Image from 'next/image';
const josefinSans = Josefin_Sans({
    subsets: ['latin-ext'],
    weight: '700'
})

export default function ShopexOffer() {
  const shopex = [
    {
      id: 1,
      text: "24/7 Support",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
      img: "/Group.png",
    },
    {
      id: 2,
      text: "24/7 Support",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
      img: "/cashback 1.png",
    },
    {
      id: 3,
      text: "24/7 Support",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
      img: "/premium-quality 1.png",
    },
    {
      id: 4,
      text: "24/7 Support",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
      price: "$42.00",
      img: "/24-hours-support.png",
    },
  ];

  return (
    <div className=" min-h-screen flex flex-col items-center py-16">
      <h1 className={`text-4xl font-bold text-[#1A0B5B] mb-8 ${josefinSans.className} font-bold`}>
        What Shopex Offer!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 ">
        {shopex.map((shopex) => (
          <div
            key={shopex.id}
            className={`flex flex-col items-center justify-center bg-white rounded-xl shadow-md w-[250px] h-[300px]  `}
          >
            <Image
                width={64}
                height={64}
              src={shopex.img}
              alt={shopex.text}
              className="w-[64px] h-[64] object-contain mb-4 "
            />
            <div className="flex flex-col items-center  gap-2 ">
              <h2 className="text-lg font-semibold text-pink-500">
                {shopex.text}
              </h2>
              <p className='text-center'> {shopex.description}</p>
            </div>
            </div>
        ))}
      </div>
      
    </div>
  );
}
