import image1 from '../assets/01.jpeg';
import image2 from '../assets/02.jpeg';
import image3 from '../assets/03.jpeg';
import image4 from '../assets/04.jpeg';
import image5 from '../assets/05.jpg';
import image6 from '../assets/06.jpg';

const initialData = {
  items : [
    {
      itemName : 'Black With Front Zipper Cotton XL',
      itemImage : image1,
      itemPrice : '50'
    },
    {
      itemName : 'Pink T-shirt 100% Cotton XS',
      itemImage : image2,
      itemPrice : '55'
    },
    {
      itemName : 'Criss-Cross Brown Shorts M ',
      itemImage : image3,
      itemPrice : '60'
    },
    {
      itemName : 'Striped Long Dress XS',
      itemImage : image4,
      itemPrice : '30'
    },
    {
      itemName : 'Long Shirt Jeans For Women L',
      itemImage : image5,
      itemPrice : '45'
    },
    {
      itemName : 'Nike Air Shoes 40 Blue Orange White',
      itemImage : image6,
      itemPrice : '100'
    }
  ]
};

const itemsReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD_ITEM' :
      return {
        ...state,
        items : [...state.items, action.payload]
      }
    default :
      return state;
  }
};

export default itemsReducer;