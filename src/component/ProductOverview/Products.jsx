import React from "react";
import Product from "./Product";
import { useGetProducts } from "../../context/productContext";
import { useParams, useSearchParams } from "react-router-dom";

function Products() {
  const [urlParam] = useSearchParams();
  const query = urlParam.get("query");
  const sort = urlParam.get("sort");
  const { category } = useParams();
  const products = useGetProducts();
  const search = decodeURI(query);

  const filterSearchFunction = (product) => {
    const searchTerms = search.split(" ");
    if (!searchTerms || !query) return true;
    const name = product?.name?.toLowerCase();
    const description = product?.description?.toLowerCase();
    return searchTerms.some(
      (term) =>
        name.includes(term) || (description && description?.includes(term))
    );
  };
  let sortFunction = (a, b) => a.category > b.category;
  if (sort === "priceAsc") sortFunction = (a, b) => a.price > b.price;
  if (sort === "priceDesc") sortFunction = (a, b) => a.price < b.price;
  if (sort === "nameAsc")
    sortFunction = (a, b) => a.description > b.description;
  if (sort === "nameDesc")
    sortFunction = (a, b) => a.description < b.description;

  const productElements = products.item
    .filter(filterSearchFunction)
    .filter((product) => (category ? product.category === category : true))
    .sort(sortFunction)
    .map((item) => <Product key={item.id} {...item} />);
  return <>{productElements}</>;
}

export default Products;
