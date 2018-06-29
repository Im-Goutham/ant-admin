import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents';
import BuyProducts from './pages/BuyProducts';
import SaleProducts from './pages/SaleProducts';
import SaleOrders from './pages/SaleOrders';
import MyInventory from './pages/MyInventory';
import PurchaseProducts from './pages/PurchaseProducts';

import NoMatch from './pages/NoMatch';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import {store, persistor} from './store';


class App extends Component {




  render() {
    return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/documents" component={Documents}/>
          <Route path="/saleProducts" component={SaleProducts}/>
          <Route path="/buyProducts" component={BuyProducts}/>
          <Route path="/saleOrders" component={SaleOrders}/>
          <Route path="/myInventory" component={MyInventory}/>
          <Route path="/purchaseProducts" component={PurchaseProducts}/>
        {/* <Route path="*" component={NoMatch}/> */}
        </div>
      </Router>
      </PersistGate>
   </Provider>
    );
  }
}

export default App;
