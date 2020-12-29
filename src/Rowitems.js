import "./App.css";
function Rowitem(props) {
  return (
    <li class="row">
      <div class="col left">
        <div class="thumbnail">
          <a href="#">
            <img src="https://via.placeholder.com/200x150" alt="" />
          </a>
        </div>
        <div class="detail">
          <div class="name">
            <a href="#"> PRODUCT ITEM NUMBER {props.Rowitem} </a>
          </div>
          <div class="description">
            Description for product item number {props.Rowitem}
          </div>
          <div class="price">{props.price}</div>
        </div>
      </div>
      <div class="col right">
        <div class="quantity">
          <input
            type="number"
            class="quantity"
            step="1"
            value={props.quantity}
          />
        </div>
        <div class="remove">
          <svg
            version="1.1"
            className="close"
            xmlns="//www.w3.org/2000/svg"
            xmlnsXlink="//www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 60 60"
            enableBackground="new 0 0 60 60"
            xmlSpace="preserve"
          >
            <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
          </svg>
        </div>
      </div>
    </li>
  );
}
export default Rowitem;
