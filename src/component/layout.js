import * as React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import './styles/main.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="container">
      <title>{pageTitle}</title>
      <Banner />
      <Navbar />
      <main className="mainContent">
        {children}
      </main>
    </div>
  )
}
export default Layout 