import React, { Component } from 'react';
import './App.css';

import Store from './CRUD/Store';
//import ProductCrud from './CRUD/ProductCrud';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Store/>
      </div>
    );
    
  }
}

export default App;
