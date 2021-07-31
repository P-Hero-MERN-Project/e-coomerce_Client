import React from 'react'

export const TableHead = ({ heads }) => {
    return (
        <div className="flex justify-evenly items-center mb-3">
           {
               heads.map(head=>(
                   <div className="uppercase text-xs">{ head }</div>
               ))
           } 
        </div>
    )
}
