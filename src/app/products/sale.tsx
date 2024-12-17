import { FaStar } from "react-icons/fa6";
import Image from "next/image";

interface Iproducts {
  title: string;
  price: string;
  id: number;
  rating?: string;
  oldprice?: string;
  img_url: string;
}

let product: Iproducts[] = [
  {
    title: "Vertical Striped Shirt",
    id: 5,
    price: "$212",
    img_url: "/product5.png",
    oldprice: "$232",
  },
  {
    title: "Courage Graphic T-Shirt",
    id: 6,
    price: "$145",
    img_url: "/product6.png",
  },
  {
    title: "Loose Fit Bermuda Shorts",
    id: 7,
    price: "$80",
    img_url: "/product7.png",
  },
  {
    title: "Faded Skinny Jeans",
    id: 8,
    price: "$210",
    img_url: "/product8.png",
  },
];

export default function Top_sell() {
  return (
    <div className="w-full h-[500px]">
      <h1 className="text-4xl font-extrabold p-12 text-center">TOP SELLING</h1>
      <div className="flex justify-between pl-32 pr-32">
        {product.map((data, index) => {
          return (
            <div key={data.id || index}>
              <div className="w-[220px] h-[260px] rounded-2xl bg-[#F0EEED]">
                <Image
                  src={data.img_url}
                  alt={data.title}
                  className="w-full h-full rounded-[30px]"
                  width={300}
                  height={260}
                />
              </div>
              <div>
                <p className="text-sm mt-2 font-bold">{data.title}</p>
                {/* Fixed Star Rendering */}
                <p className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </p>
                <div className="flex space-x-2">
                  <p className="font-bold">{data.price}</p>
                  {data.oldprice && (
                    <p className="text-[#00000066] line-through">{data.oldprice}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}