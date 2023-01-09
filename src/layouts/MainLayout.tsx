import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const MainLayout = () => {
  return (
    <div className="grid gap-4 grid-cols-2">
        <aside className="w-16">
            <div>LOGO</div>
            <ul>
                <li>
                    <Link to="/">Tables</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
            </ul>
        </aside>
        <main>
            <Outlet/>
        </main>
        
    </div>
  )
}

export default MainLayout