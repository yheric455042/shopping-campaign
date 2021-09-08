//import database from "./database.json";
import ProductList from "./ProductList";

export const checkout = (productIDs = []) => {
  let prodlist = ProductList(productIDs);

  prodlist.discount();
  console.table(prodlist.getList());
  return prodlist.getTotal();
};

document.getElementById("app").innerHTML =
  "Your price is $" + checkout(["003", "002", "003", "003", "004"]);
