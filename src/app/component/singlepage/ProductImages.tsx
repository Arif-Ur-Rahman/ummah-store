'use client';

import Image from "next/image";
import { useState } from "react";


const images = [{
  id: 1,
  url: '/products/singleproducts/bestintown.png',
},
{  id: 2,
  url: '/products/singleproducts/boutique.png',
},
{  id: 3,
  url: '/products/singleproducts/since2015.png',
},
]

const ProductImages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt="Product Image"
          fill
          sizes="50vw"
          className="object-cover ronded-md"
        />
      </div>
      <div className="flex gap-4 mt-8 justify-between cursor-pointer">
        {images.map((img,i) => (
          <div className="w-1/4 h-32 relative gap-4 mt-8" key={img.id} onClick={() => setIndex(i)}> 
            <Image
              src={img.url}
              alt="Thumbnail"
              fill
              sizes="25vw"
              className="object-cover ronded-md"
              />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
