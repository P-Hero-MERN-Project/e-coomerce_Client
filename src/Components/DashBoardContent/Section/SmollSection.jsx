import React from 'react'

export const SmollSection = ({items}) => {
    
    return (
        <div className="flex justify-around">
            {
                items.map(item=>(
                    <h4 className="font-semibold text-2xl py-4 px-1">
                        {item}%
                    </h4>
                ))
            }
        </div>
    )
}
