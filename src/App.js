import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux'
import { 
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { createStore } from 'redux';
import {
  persistReducer,
  persistStore
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import AddItem from './components/AddItem';
import Cart from './components/Cart';
import Items from './components/Items';
import Navbar from './components/Navbar';

import rootReducer from './reducers/rootReducer';

import './App.css';
import Footer from './components/Footer';

const App = () => {

  const persistConfig = {
    key : 'root',
    storage
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navbar />
          <BrowserRouter>
            <Switch>
              <Route path='/' component={Items} exact />
              <Route path='/add-item' component={AddItem} />
              <Route path='/cart' component={Cart} exact />
            </Switch>
          </BrowserRouter>
          <Footer />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
