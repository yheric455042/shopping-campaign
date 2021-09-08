export default class {
  constructor() {
    this._products = [];
    this._priceMap = {};
    this._disablePosition = [];
  }
  setDisablePosition(positions) {
    this._disablePosition = positions;
    return this;
  }

  setProducts(products) {
    this._products = products;

    return this;
  }

  discount() {
    return this;
  }

  getPriceMap() {
    return this._priceMap;
  }
}
