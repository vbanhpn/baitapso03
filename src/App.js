import "./App.css";
import Rowitem from "./Component/Rowitems";
import Header from "./Component/Header";
import Promotion from "./Component/Promotion";
import Summary from "./Component/Summary";
import Button from "./Component/Button";
import { useState } from "react";

let PRODUCTS = [
  {
    name: "Apple 1",
    item: "1",
    description: "Delicious apple 1",
    src: "/img/anh1.jpg",
    price: 10.99,
    quantity: 200,
  },
  {
    name: "Apple 2",
    item: "2",
    description: "Delicious apple 2",
    src: "/img/anh2.jpg",
    price: 8.99,
    quantity: 10,
  },
];

function App() {
  let [products, setProducts] = useState(PRODUCTS);
  let totalitem = 0;
  let subtotal = 0;
  let tax = 0;
  var items = []; 
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    items.push(
      <Rowitem
        key={product.name}
        name={product.name}
        item={product.item}
        src={product.src}
        price={product.price}
        quantity={product.quantity}
        description={product.description}  
        onRemoveRowItem = {onRemoveRowItem} 
        onChangeQuantity={onChangeQuantity}
      ></Rowitem>
    );
    totalitem += product.quantity;
    subtotal += product.price * product.quantity; 
  }
  function onRemoveRowItem(item) {
    products =  products.filter( function (products) 
    { 
      return products.item !== item
    }
    );
    setProducts(products);
  }
  function onChangeQuantity(item, newQuantity){
    let newProducts = [...products];
    let productIndex = newProducts.findIndex(function (product) {
        return product.item === item;
      });
    newProducts[productIndex].quantity = newQuantity;
    setProducts(newProducts);
  }
  tax += subtotal * 0.1;
  return (
    <div>
      <Header total={totalitem}> </Header>
      <section className="container">
        <ul className="products">{items}</ul>
      </section>
      <section className="container">
        <div className="promotion">
          <Promotion></Promotion>
        </div>
        <Summary
          subtotal={subtotal}
          tax={tax}
          total={(subtotal + tax)}
        ></Summary>
        <div className="checkout">
          <Button name="Check out" > </Button> 
          
        </div> 
      </section>
    </div>
  );
}

export default App;
