import { Component } from 'react'
import { getPromotions } from "./ListPromotion";
export default class Promotion2 extends Component {
     findPromotion(e) {
        let vl = e.target.value;
        let item={};
        let lstpromotion = getPromotions();
        // eslint-disable-next-line array-callback-return
        lstpromotion.map((p) => {
            if (p.code === vl) {
                item =p;
            }
            
          });
        console.log("item",item)
      }
    render() {
        return (
            <div className="promotion">
            <label htmlFor="promo-code">Have A Promo Code?</label>
            
            <input
              type="text"
              id="promo-code"
              onChange={this.findPromotion.bind(this)}
            />
            <button type="button">Accept </button>
          </div>
        )
    }
}
