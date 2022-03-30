
import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <header>Header</header>
        <main style={{border: '1px solid red'}}>
            <Outlet />
        </main>
        <footer>
            footer
        </footer>
    </div>
  )
}

export default WebsiteLayout