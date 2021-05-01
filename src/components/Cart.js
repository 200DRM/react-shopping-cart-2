import React from 'react'
import { 
  useDispatch, 
  useSelector 
} from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch();
  const cartObj = useSelector(store => store.cartReducer);

  const tableBody = cartObj.cartItems.map((item) => {
    return (
      <tr>
        <td className='py-3'>
          {item.itemName}
        </td>
        <td className='py-3'>
          {item.itemPrice}
        </td>
        <td>
          <button 
            className='btn btn-danger'
            onClick={() => dispatch({
              type : 'DELETE_ITEM_FROM_CART',
              payload : item
            })}
          >
            DELETE
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className='row justify-content-center'>
      <table className='table table-bordered col-md-8 mt-5'>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </table>
    </div>
  )
}

export default Cart;