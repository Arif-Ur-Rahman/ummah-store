import React from 'react'

const CustomizedProducts = () => {
  return (
    <div className='flex flex-col gap-6'>
        <h4 className="font-medium">Choose A Color</h4>
        <ul className="flex items-center gap-3">
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full ring-2"></div>
</li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500">
                
            </li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-green-500">
                
            </li>
        </ul>
        <h4 className="">Choose A Size</h4>
        <ul className="flex items-center gap-3"></ul>
    </div>
  )
}

export default CustomizedProducts