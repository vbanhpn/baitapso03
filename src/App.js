import logo from "./logo.svg";
import "./App.css";
import Rowitem from "./Component/Rowitems";
import Header from "./Component/Header";
import Promotion from "./Component/Promotion";
import Summary from "./Component/Summary";
import Button from "./Component/Button";
function App() {
  const items = [];
  for (let i = 1; i <= 2; i++) {
    items.push(
      <div>
        <Rowitem Rowitem={i} price="$10" quantity=""></Rowitem>
      </div>
    );
  }
  return (
    <div>
      <Header total="4"> </Header>
      <section className="container">
        <ul className="products">
          <Rowitem
            name="Product number "
            Rowitem="1"
            price="$10"
            quantity="2"
          ></Rowitem>
          <Rowitem
            name="Product number "
            Rowitem="2"
            price="$10"
            quantity="10"
          ></Rowitem>
        </ul>
      </section>
      <section className="container">
        <div className="promotion">
          <Promotion></Promotion>
        </div>
          <Summary subtotal="$21.97" tax="$5.00" total="$26.97"></Summary>
        <div className="checkout">
          <Button name="Check out"> </Button>
        </div>
      </section>
    </div>
  );
}

export default App;
