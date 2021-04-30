import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { 
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import AddItem from './components/AddItem';
import Cart from './components/Cart';
import Items from './components/Items';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Items} exact />
          <Route path='/add-item' component={AddItem} />
          <Route path='/cart' component={Cart} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
