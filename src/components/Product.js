import database from "../database.json";

class Product {
  constructor(id) {
    this._id = id;
    this._product = database?.products[id];
    if (!this._product) {
      throw "productId is not exist";
    }
  }
  getPrice() {
    return parseFloat(this._product.price);
  }
  getName() {
    return this._product.name;
  }
  getId() {
    return this._id;
  }
}

let instances = {};

export default (id) => {
  if (!instances[id]) {
    instances[id] = new Product(id);
  }

  return instances[id];
};
