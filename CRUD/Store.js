import React from 'react';
class Store extends React.Component {

   constructor() {
      super();
      this.state = {
         product_name: "",
         product_cost: "",
         btn_stt: true,
         edit_id: 0,
         products: [{ name: "Apple", cost: 180 }]
      }
   }

   addProduct = () => {
      debugger
      let rawObject = {
         name: this.state.product_name,
         cost: this.state.product_cost
      }
      this.setState({
         products: [...this.state.products, rawObject]
      })
      this.state.product_name= ""
      this.state.product_cost =''
   }

   editProduct = (product, idx) => {
      debugger
      this.setState({
         product_name: product.name,
         product_cost: product.cost,
         btn_stt: false,
         edit_id: idx
      })
   }

   updateProduct = () => {
      let newproducts = [...this.state.products];
      newproducts = newproducts.map((ele, i) => {
         if (i === this.state.edit_id) {
            return {
               name: this.state.product_name,
               cost: this.state.product_cost
            }
         }
         return ele;
      })
      this.setState({
         products: newproducts
      })
      // this.setState({
      //     product_name : this.state.product_name,
      //     product_cost : this.state.product_cost
      // })
   }

   delProduct = (index) => {
      debugger
      let items = this.state.products;
      items.splice(index, 1);
      this.setState({
         products: items
      })
   }

   render() {
      return (
         <div className="container">
            <h1>My CRUD Operation with the React JS</h1>
               Name : <input className="form-control" onChange={(evt) => {
                  this.setState({
                     product_name: evt.target.value
                  })
               }} value={this.state.product_name} />
   
               Cost : <input className="form-control" onChange={(evt) => {
                  this.setState({
                     product_cost: evt.target.value
                  })
               }} value={this.state.product_cost} /><br/>

               {
                  (this.state.btn_stt) ? <button className="btn btn-success" onClick={this.addProduct}>Add Product</button> : <button className="btn btn-primary" onClick={this.updateProduct}>Update Product</button>
               }

            <hr />
            <table className="table">
               <th>Name</th><th>Cost</th><th>Actions</th>
               {
                  this.state.products.map((product, i) => {
                     return (
                        <tr key={i}>
                           <td>{product.name}</td>
                           <td>{product.cost}</td>
                           <td>
                              <button className="btn btn-danger" onClick={() => this.delProduct(i)}>Delete</button> |
           <button className="btn btn-primary" onClick={() => this.editProduct(product, i)}>Edit</button>
                           </td>
                        </tr>
                     )
                  })
               }
            </table>
         </div>
      )
   }


}

export default Store;
