import FormatNumber from "./FormatNumber";
function Summary({ subtotal, pecent }) {
  // console.log("pecent",pecent)
  function Tax() {
    let a = subtotal * 0.1;
    return a;
  }
  function Total() {
    let stotal = subtotal + subtotal * 0.1;
    return stotal;
  }
  function Discount() {
    let sDiscount = (Total() * pecent) / 100;
    return sDiscount;
  }
  function Amount() {
    let sAmount = Total() - Discount();
    return sAmount;
  }
  return (
    <div className="summary">
      <ul>
        <li>
          {" "}
          Subtotal: <span>{FormatNumber(subtotal, "$", 2)}</span>{" "}
        </li>
        <li>
          {" "}
          Tax: <span> {FormatNumber(Tax(), "$", 2)}</span>{" "}
        </li>
        <li className="total">
          {" "}
          Total: <span> {FormatNumber(Total(subtotal), "$", 2)} </span>
        </li>
        <li>
          {" "}
          <hr></hr>{" "}
        </li>
        <li>
          {" "}
          Discount: <span> {FormatNumber(Discount(), "$", 2)}</span>{" "}
        </li>
        <li className="total">
          {" "}
          Amount: <span> {FormatNumber(Amount(), "$", 2)}</span>{" "}
        </li>
      </ul>
    </div>
  );
}
export default Summary;
