import React from 'react'
import { SmallSection3 } from '../SmallSection/SmallSection3'
import { SmallSection4 } from '../SmallSection/SmallSection4'
import { SmallSection5 } from '../SmallSection/SmallSection5'
import { SmallSection6 } from '../SmallSection/SmallSection6'

export const Sub3 = () => {
    return (
        <div className="grid grid-cols-2 gap-2 mt-5">
            <SmallSection3 item={{title:"Delevered", amount:20}}/>
            <SmallSection4 item={{title:"Processing", amount:10}}/>
            <SmallSection5 item={{title:"Pick", amount:30}}/>
            <SmallSection6 item={{title:"Shiped", amount:100}}/>
        </div>
    )
}
