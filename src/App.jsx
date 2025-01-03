import React from 'react'
import { Header, Footer } from './components'
import Cardlist from './components/Cardlist'
import {AllRoute} from './Allroute/AllRoute'

const App = () => {
  return (
    <div className="max-w-[1280px] mx-auto min-h-[80vh] p-2 ">
      <Header />
      <AllRoute/>
      <Footer />
    </div>
  )
}

export default App