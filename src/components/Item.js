import React from 'react'
import { useDispatch } from 'react-redux';

const Item = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className='shadow p-3 mb-5 bg-white rounded'>
      <h1>{item.itemName}</h1>
      <img 
        alt={item.itemName} 
        className='img-fluid' 
        src={item.itemImage}
      />
      <h1>{item.itemPrice} $</h1>
      <button
        className='btn btn-primary'
        onClick={() => {
          dispatch({
            type : 'ADD_ITEM_TO_CART',
            payload : item
          })
        }}
      >
        ADD TO CART
      </button>
    </div>
  )
}

export default Item;