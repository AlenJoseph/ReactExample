import React, { Component } from 'react';

import './App.css';

class App extends Component {

  state ={
    products:[],
    product:{
      name: '',
      price:0

    }
  }
  componentDidMount(){
    this.getProducts();
  }
  getProducts = _ =>  {
    fetch('http://localhost:4000/products')
     .then(response => response.json()
     .then(response => this.setState({products: response.data}))
     .catch(err => console.log(err)));
  }

  addProduct = _ =>{
    // const{product} =this.state;
    // var data = {
    //   name: "product.name",
    //   price: 0
    // }

  // console.log(data);
    fetch('http://localhost:4000/products/add',{
      method : 'post',
   headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body :JSON.stringify({a: 1, b: 2})
      }).then(response => response.json())
      .then(this.getProducts)
      .catch(err => console.error(err))
  }


   renderProduct = ({products_id,name}) => <div key={products_id}>{name}</div>
  render() {
    const {products,product}= this.state;
    return (
      <div className="App">
       {products.map(this.renderProduct)}
       <div>
         <input 
         value={product.name} 
          onChange={e => this.setState({ product: { ...product,name: e.target.value}})}/> 
         <input
          value={product.price}
          onChange={e => this.setState({ product: { ...product,price: e.target.value}})}/> 
          <button onClick={this.addProduct}> Add Product </button>
       </div>
      </div>
    );
  }
}

export default App;
