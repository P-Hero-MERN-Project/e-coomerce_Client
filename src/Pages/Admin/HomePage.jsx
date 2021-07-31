import React from 'react'
import { LeftNavBar } from '../../Components/LeftNavBar/LeftNavBar'
import { TopNavBar } from '../../Components/TopNavBar/TopNavBar'

export const HomePage = ({ children }) => {
    return (
        <div className="grid grid-cols-3 h-screen overflow-y-hidden bg-blue-100">
            <div className="bg-blue-100">
                <LeftNavBar/>
            </div>
            <div className="col-span-2 bg-blue-100">
                <TopNavBar/>
               { children }
            </div>
        </div>
    )
}
