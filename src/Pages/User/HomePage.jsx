import React from 'react'
import { HomeTopNavBar } from '../../Components/HomeTopNavBar/HomeTopNavBar'



export const HomePage = (props) => {
  const { children } = props;
    return (
        <div className="bg-blue-100">
          <HomeTopNavBar/>
          {
            children
          }
        </div>
    )
}
