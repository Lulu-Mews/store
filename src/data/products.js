import products from "./products.json";

const getProducts = async (id) => {
  console.log(products);
  if (id) {
    const product = products.item.find((product) => product.id === id);
    return { item: product };
  }
  return products;
};

export default getProducts;
