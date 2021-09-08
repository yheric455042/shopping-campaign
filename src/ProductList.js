import Product from "./components/Product";
import Campaign1 from "./components/Campaign1";
import Campaign2 from "./components/Campaign2";

class ProductList {
  constructor(productIDs) {
    if (!Array.isArray(productIDs)) {
      throw "productIDs is not array";
    }
    this._products = productIDs.map((id) => Product(id));
    this._priceMap = {};
  }

  discount() {
    let campaign1 = Campaign1().setProducts(this._products);
    let campaign2 = Campaign2().setProducts(this._products);

    Object.assign(this._priceMap, campaign1.discount().getPriceMap());
    campaign2.setDisablePosition(Object.keys(this._priceMap));
    Object.assign(this._priceMap, campaign2.discount().getPriceMap());

    return this;
  }

  getTotal() {
    return this._products.reduce((carry, product, index) => {
      let price = this._priceMap[index] || product.price;

      return carry + price;
    }, 0);
  }

  getList() {
    return this._products.map((product, index) => {
      let price = this._priceMap[index] || product.price;

      return {
        ID: product.getId(),
        Name: product.getName(),
        "Original Price": product.getPrice(),
        "Campaign Price": price
      };
    });
  }
}

let instances = {};

export default (productIDs) => {
  let id = productIDs.toString();
  if (!instances[id]) {
    instances[id] = new ProductList(productIDs);
  }

  return instances[id];
};
