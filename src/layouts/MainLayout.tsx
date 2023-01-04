import React from 'react'
import {Outlet} from 'react-router-dom'
const MainLayout = () => {
  return (
    <div>
        <aside>Sitebar</aside>
        <main>
            <Outlet/>
        </main>
        
    </div>
  )
}

export default MainLayout