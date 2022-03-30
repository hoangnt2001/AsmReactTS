
import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        <header>Admin Layout</header>
        <aside>Sidebar</aside>
        <main style={{border: '1px solid red'}}>
            <Outlet />
        </main>
    </div>
  )
}

export default AdminLayout