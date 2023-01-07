import React from 'react'
import {Outlet} from 'react-router-dom'
const MainLayout = () => {
  return (
    <div>
        <aside>
            <div>LOGO</div>
        </aside>
        <main>
            <Outlet/>
        </main>
        
    </div>
  )
}

export default MainLayout