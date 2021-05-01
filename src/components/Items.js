import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Item from './Item';

const Items = () => {
  const itemsObj = useSelector(store => store.itemsReducer);
  
  const [itemsList, setItemsList] = useState(itemsObj.items);
  const [searchKey, setSearchKey] = useState('');
  
  const filterItems = () => {
    const duplicatedList = itemsObj.items; 
    const filteredList = duplicatedList.filter(item => (
      item.itemName.toLowerCase().includes(searchKey.toLowerCase())
    ));
    setItemsList(filteredList);
  };
  const itemsData = itemsList.map((item) => {
    return (
      <div className='col-md-4'>
        <Item item={item} key={item.itemName} />
      </div>
    );
  });

  return (
    <div className='container'>
      <input
        className='form-control mb-5'
        onChange={(e) => setSearchKey(e.target.value)}
        onKeyUp={filterItems}
        placeholder='Search items...'
        type='text'
        value={searchKey}
      />
      <div className='row'>
        {itemsData}
      </div>
    </div>
  )
}

export default Items;