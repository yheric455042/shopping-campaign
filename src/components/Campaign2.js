import Campaign from "../interfaces/Campaign";
class Campaign2 extends Campaign {
  constructor() {
    super();
  }

  discount() {
    const hasDiscount = this._products.length > 3;

    this._products.forEach((product, index) => {
      if (this._disablePosition.indexOf(index.toString()) === -1) {
        this._priceMap[index] = product.getPrice() - (hasDiscount ? 5 : 0);
      }
    });

    return this;
  }
}
let instance = null;

export default () => {
  if (instance === null) {
    instance = new Campaign2();
  }

  return instance;
};
