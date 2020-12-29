
function Summary(props) {
  return (
      <div className="summary">
        <ul>
          <li> Subtotal <span>{props.subtotal}</span> </li>
          <li>   Tax <span> {props.tax}</span> </li>
          <li className="total">  Total <span> {props.total} </span>  </li>
        </ul>
      </div>
  );
}
export default Summary;