import React from 'react'
import { Sub1 } from '../SubSection/Sub1'
import { Sub2 } from '../SubSection/Sub2'

export const Section2 = () => {
    return (
        <>
        <Sub1 item={{title:"Orders", amount:310}}/>
        <Sub2 item={{title:"Products", amount:310}}/>
        </>
    )
}
