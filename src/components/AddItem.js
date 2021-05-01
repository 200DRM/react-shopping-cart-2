import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddItem = () => {
  const dispatch = useDispatch();
  
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemImage, setItemImage] = useState('');

  const addItem = () => {
    const item = {
      itemName,
      itemPrice,
      itemImage
    };
    dispatch({
      type : 'ADD_ITEM',
      payload : item
    });
  };

  return (
    <div className='row justify-content-center mt-5'>
      <div className='col-md-6'>
        <input
          className='form-control'
          onChange={(e) => setItemName(e.target.value)}
          placeholder='Item name'
          type='text'
          value={itemName}
        />
        <input
          className='form-control'
          onChange={(e) => setItemPrice(e.target.value)}
          placeholder='Item price'
          type='text'
          value={itemPrice}
        />
        <input
          className='form-control'
          onChange={(e) => setItemImage(e.target.value)}
          placeholder='Item image'
          type='text'
          value={itemImage}
        />
        <div className='col-with-button-only'>
          <button
            className='btn btn-primary'
            onClick={addItem}
          >
            ADD ITEM
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddItem;