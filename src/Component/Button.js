function Button({name, onCheckoutClick}) {
  return (
      <button onClick = {()=> onCheckoutClick()} type="button"  > {name} </button>
  );
}
export default Button;
