import Campaign from "../interfaces/Campaign";
class Campaign1 extends Campaign {
  constructor() {
    super();
  }

  discount() {
    this._products.reduce((carry, product, index) => {
      let id = product.getId();
      if (!carry[id]) {
        carry[id] = index;
      } else {
        this._priceMap[index] = product.getPrice() / 2;
        this._priceMap[carry[id]] = product.getPrice();

        delete carry[id];
      }
      return carry;
    }, {});

    return this;
  }
}
let instance = null;

export default () => {
  if (instance === null) {
    instance = new Campaign1();
  }

  return instance;
};
