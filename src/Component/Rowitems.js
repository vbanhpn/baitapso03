import React from "react";
import {useState} from "react"
import "./Images";

function Rowitem({ name, item, src, price, quantity, description, onRemoveRowItem,onChangeQuantity }) { 
  let [, setQuantity] = useState(quantity);
  function ChangeQuantity(item, newQuantity) 
  {
  if(!newQuantity) newQuantity = "0";
  setQuantity(parseInt(newQuantity).toString());
  onChangeQuantity(item, parseInt(newQuantity));
}
  return (
    <li className="row">
      <div className="col left">
        <div className="thumbnail">
          <a href="/">
            <img src={src} alt={item} />
          </a>
        </div>
        <div className="detail">
          <div className="name">
            <a href="/">
              {name} {item}
            </a>
          </div>
          <div className="description">{description}</div>
          <div className="price">${price}</div>
        </div>
      </div>
      <div className="col right">
        <div className="quantity">
          <input
            type="number"
            className="quantity"
            step="1"
            defaultValue={quantity}
             onChange = {(evnet) => ChangeQuantity(item,evnet.target.value)}
          />
        </div>
        <div className="remove">
          <svg
            version="1.1"
            className="close"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 60 60"
            enableBackground="new 0 0 60 60"
            xmlSpace="preserve"
            onClick= {() => onRemoveRowItem(item)}
          >
            <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"></polygon>
          </svg>
        </div>
      </div>
    </li>
  );
}
export default Rowitem;
