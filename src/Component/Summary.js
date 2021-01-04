import FormatNumber from "./FormatNumber";
function Summary({subtotal, tax , total}) { 
 
  return (
      <div className="summary">
        <ul>
          <li> Subtotal <span>{FormatNumber(subtotal, "$",2)}</span> </li>
          <li>   Tax <span> {FormatNumber(tax, "$",2)}</span> </li>
          <li className="total">  Total <span> {FormatNumber(total,"$",2)} </span>  </li>
        </ul>
      </div>
  );
}
export default Summary;