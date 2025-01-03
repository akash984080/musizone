import React from 'react'
import { Cartdetail } from '../components/index'
import { usecart } from '../context/Context'
import { usetitle } from '../Hooks/usetitle'

const Cart = () => {
  const { cartlist, total } = usecart()

usetitle("Cart")

  return (
    <div >
      <div className='text-center '>
        <span className='text-3xl font-extrabold text-center border p-2 '>Cart-Items {cartlist.length}/{total}</span>
      </div>
      {

        cartlist.map((product) => (<Cartdetail key={product.id} product={product} />))
      }

    </div>
  )
}

export default Cart