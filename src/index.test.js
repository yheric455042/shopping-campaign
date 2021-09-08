import { checkout } from "./index.js";

it("Should get 0 if nothing is purchased", () => {
  expect(checkout([])).toBe(0);
});

it("Should get exception if productIDs is not array", () => {
  expect(checkout({})).to.throw("productIDs is not array");
});
it("ProductId is not exist", () => {
  expect(checkout(["009"])).to.throw("productId is not exist");
});
