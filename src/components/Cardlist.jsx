import React from 'react'
import { Card } from './index'
import { Headphonedatas } from '../data/db'
import { usetitle } from '../Hooks/usetitle'
const Cardlist = () => {
  usetitle('Home')
  return (
    <div className='max-w-[1280px] mx-auto min-h-[90vh] p-2 '>
      <div className='flex   gap-3 justify-start  flex-wrap  usm:justify-evenly '>
        {
          Headphonedatas.map((data) => {
            return <Card key={data.id} data={data} />
          })}


      </div>
    </div>
  )
}

export default Cardlist