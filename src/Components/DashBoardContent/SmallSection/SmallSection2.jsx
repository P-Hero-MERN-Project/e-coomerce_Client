import React from 'react'

export const SmallSection2 = ({items}) => {
    return (
        <div className="flex justify-around">
             {items.map((item, index) => (
        <h4 className="font-semibold text-sm py-1 px-1 flex items-center gap-2 text-gray-500">
          <div className="bg-green-400 w-2 h-2 rounded-full"></div>
          {item}
        </h4>
      ))}
        </div>
    )
}
