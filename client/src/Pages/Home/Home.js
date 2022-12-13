import React from 'react'

import About from '../About/About'
import Footer from '../Footer/Footer'
import Search from '../Search/Search'
import WebSiteExplain from '../WebSiteExplain/WebSiteExplain'
import Welcome from '../Welcome/Welcome'

const Home = ({setSerchInput}) => {
  return (
    <>
        <Welcome setSerchInput={setSerchInput} />
        <WebSiteExplain />
        <Search setSerchInput={setSerchInput} />
        <About />
        <Footer />
    </>
  )
}

export default Home