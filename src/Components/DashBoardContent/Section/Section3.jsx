import React from 'react'
import { Sub3 } from '../SubSection/Sub3'
import { Sub4 } from '../SubSection/Sub4'

export const Section3 = () => {
    return (
        <>
        <div>
            <h3 className="text-xl font-bold">Activity Overview</h3>
            <Sub3/>
        </div>
        <div className="col-span-2">
            <h3 className="text-xl font-bold">Recent product</h3>
            <Sub4/>
        </div>
        </>
    )
}
