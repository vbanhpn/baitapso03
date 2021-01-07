/* eslint-disable array-callback-return */
import "./App.css";
import Rowitem from "./Component/Rowitems";
import Header from "./Component/Header";
import Promotion from "./Component/Promotion";
import Summary from "./Component/Summary";
import Button from "./Component/Button";
import { useState } from "react";
import { getPromotions } from "./Component/ListPromotion";

let PRODUCTS = [
  {
    name: "Apple 1",
    itemId: "1",
    description: "Delicious apple 1",
    src: "/img/anh1.jpg",
    price: 10.99,
    quantity: 8,
  },
  {
    name: "Apple 2",
    itemId: "2",
    description: "Delicious apple 2",
    src: "/img/anh2.jpg",
    price: 8.99,
    quantity: 10,
  },
];

function App() {
  let [products, setProducts] = useState(PRODUCTS);
  let [inputPromotion, setInputPromotion] = useState("");
  let [pecent, setPecent] = useState("");
  function onChangeQuantity(newQuantity, item) {
    const newProducts = products.map((p) => {
      if (p.itemId !== item) {
        return p;
      }
      let newProduct = { ...p, quantity: newQuantity };
      return newProduct;
    });
    setProducts(newProducts);
  }

  let totalitem = 0;
  let subtotal = 0;
  var items = products.map((p) => {
    totalitem += p.quantity;
    subtotal += p.price * p.quantity;
    return (
      <Rowitem
        key={p.name}
        name={p.name}
        itemId={p.itemId}
        src={p.src}
        price={p.price}
        quantity={p.quantity}
        description={p.description}
        onRemoveRowItem={onRemoveRowItem}
        onChangeQuantity={onChangeQuantity}
      ></Rowitem>
    );
  });
  function onRemoveRowItem(item) {
    products = products.filter(function (p) {
      return p.itemId !== item;
    });
    setProducts(products);
  }
  let lstpromotion = getPromotions();

  // function onChangeQuantity(item, newQuantity) {
  //   let newProducts = [...products];
  //   let productIndex = newProducts.findIndex(function (product) {
  //     return product.item === item;
  //   });
  //   newProducts[productIndex].quantity = newQuantity;
  //   setProducts(newProducts);
  // }
  // luu y den filter, map, inclue, some, find
  // uncontroller: chỉ nhìn thấy sự thay đổi giá trị
  //Controller : kiểm soát giá trị
  function onGetPecent() {
    // let pro = {};
    let pro = lstpromotion.find((p) => {
      if (p.code === inputPromotion) {
        return p;
      }
    });
    if (pro) setPecent(pro.pecent);
    else setPecent(0);
  }
  function handelClick() {
    alert("Check out");
  }
  return (
    <div>
      <Header total={totalitem}> </Header>
      <section className="container">
        <ul className="products">{items}</ul>
      </section>
      <section className="container">
        <div className="promotion">
          <Promotion
            inputPromotion={inputPromotion}
            setInputPromotion={setInputPromotion}
            onGetPecent={() => {
              onGetPecent();
            }}
          ></Promotion>
        </div>
        <Summary subtotal={subtotal} pecent={pecent}></Summary>
        <div className="checkout">
          <Button name="Check out" onCheckoutClick={handelClick}>
            {" "}
          </Button>
        </div>
      </section>
    </div>
  );
}
export default App;
