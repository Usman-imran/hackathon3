import { FaStar } from "react-icons/fa6";
import Image from 'next/image';

interface Iproducts{
    title:string,
    price:string,
    id:number,
    rating?:string,
    oldprice?:string,
    img_url:string
}

let product:Iproducts [] = [
    {
        title:"T-Shirt With Tape Details",
        id:1,
        price:"$120",
        img_url:"/product1.png"
    },
    {
        title:"Skinny Fit Jeans",
        id:2,
        price:"$240",
        img_url:"/product2.png",
        oldprice:"$260"
    },
    {
        title:"Checkered Shirt",
        id:3,
        price:"$180",
        img_url:"/product3.png"
    },
    {
        title:"Sleeve Striped T-Shirt",
        id:4,
        price:"$130",
        img_url:"/product4.png",
        oldprice:"$160"
    }
]
let star = [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar />]

export default function Products (){
    return(
        <div className="w-full h-[500px]" >
            <h1 className="text-4xl font-extrabold p-12 text-center">NEW ARRIVALS</h1>
            <div className="flex justify-between pl-32 pr-32">
                {
                    product.map((data, index) => {
                        return (
                          <div key={data.id || index}> {/* Key Added Here */}
                         
                           
                            <div className="w-[220px] h-[230x] rounded-2xl bg-[#F0EEED]">
                            <Image src={data.img_url} alt={data.title} 
                            className="w-full h-full rounded-[30px] "
                            width={300} height={100}></Image>
                            </div>
                            <div>
                            <p className="text-sm mt-2 font-bold">{data.title}</p>
                            <p className="flex text-yellow-400">{star}</p>
                            <div className="flex space-x-2">
                            <p className="font-bold">{data.price}</p>
                            <p className="text-[#00000066] line-through"> {data.oldprice}</p>
                            </div>
                            </div>
                         </div>
                     
                    
                    
                        ) 
                    } )
                     
                }
            </div>
        </div>
    )
}