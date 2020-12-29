import React from 'react'; 
import "./Images";
import Images from './Images';
function Rowitem(props) {
  return (
    <li class = "row">
      <div class="col left">
        <Images src = {"/img/anh" +  props.Rowitem  + ".jpg"}  alt= {props.Rowitem} > </Images>
        <div class="detail">
          <div class="name">
            <a href="#">  {props.name} {props.Rowitem} </a>
          </div>
          <div class="description">
            Description for product item number {props.Rowitem}
          </div>
          <div class="price">{props.price}</div>
        </div>
      </div>
      <div class = "col right">
        <div class = "quantity">
            <input type="number" class="quantity" step="1" value= {props.quantity} />
        </div> 
        <div class = "remove">
            <svg
                  version="1.1"
                  class="close"
                  xmlns="http://www.w3.org/2000/svg"
                   xmlnsxlink="http://www.w3.org/1999/xlink" 
                  x="0px"
                  y="0px"
                  viewBox="0 0 60 60"
                  enable-background="new 0 0 60 60"
                   xmlspace = "preserve"
                >
                  <polygon
                    points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"
                  ></polygon>
            </svg>
        </div>
      </div>
    </li>
  );
}
export default Rowitem;
