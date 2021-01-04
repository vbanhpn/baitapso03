import FormatNumber from "./FormatNumber";
function Header (props) {
    return (
    <header className="container">
    <h1>Shopping Cart</h1>
    <ul className="breadcrumb">
      <li>Home</li>
      <li>Shopping Cart</li>
    </ul>
    <span className="count"> {FormatNumber(props.total, "",0)} items in the bag</span>
  </header>
    );
}
export default Header;