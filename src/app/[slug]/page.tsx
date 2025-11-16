import React from 'react'
import ProductImages from '../component/singlepage/ProductImages'
import CustomizedProducts from '../component/singlepage/CustomizedProducts'
import Add from '../component/singlepage/Add'

const SinglePage  = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {/* Image  */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />

      </div>
      {/* Text  */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
      <h1 className="text-4xl font-medium">Product Name</h1>
      <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam saepe, minus maiores vero sapiente cumque veniam possimus pariatur nemo distinctio quisquam tempora assumenda amet obcaecati repudiandae tenetur eligendi! Ipsum, illo.
      </p>
      <div className="h-[2px] bg-gray-100" />
      <div className="flex gap-4 items-center">
        <h3 className="text-xl text-gray-500 line-through">$59</h3>
        <h2 className="font-medium text-2xl">$49</h2>
      </div>
      <div className="h-[2px] bg-gray-100" />
      <CustomizedProducts />
      <Add />
      <div className="h-[2px] bg-gray-100" />
      <div className="text-sm">
        <h4 className="font-medium mb-4">Title</h4>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis iste fugiat voluptate minus eaque ipsa velit nulla quo id! Harum velit dolorem quis aperiam asperiores ipsam quasi dolores reprehenderit iste!
          
        </p>
      </div>
      <div className="text-sm">
        <h4 className="font-medium mb-4">Title</h4>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis iste fugiat voluptate minus eaque ipsa velit nulla quo id! Harum velit dolorem quis aperiam asperiores ipsam quasi dolores reprehenderit iste!
          
        </p>
      </div>
      <div className="text-sm">
        <h4 className="font-medium mb-4">Title</h4>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis iste fugiat voluptate minus eaque ipsa velit nulla quo id! Harum velit dolorem quis aperiam asperiores ipsam quasi dolores reprehenderit iste!
          
        </p>
      </div>


      </div>
    </div>
  )
}

export default SinglePage 

