import React from "react";
import Product from "./Product";
import { useGetProducts } from "../../context/productContext";
import { useParams, useSearchParams } from "react-router-dom";
import { Product as ProductProp } from "../../interfaces";

function Products() {
  const [urlParam] = useSearchParams();
  const query = urlParam.get("query");
  const sort = urlParam.get("sort");
  const { category } = useParams();
  const products = useGetProducts();
  const search = decodeURI(query || "");

  const filterSearchFunction = (product: ProductProp) => {
    const searchTerms = search.split(" ");
    if (!searchTerms || !query) return true;
    const name = product?.name?.toLowerCase();
    const description = product?.description?.toLowerCase();
    return searchTerms.some(
      (term) =>
        name?.includes(term) || (description && description?.includes(term))
    );
  };
  let sortFunction = (a: ProductProp, b: ProductProp) =>
    (a.category || "") > (b.category || "") ? -1 : 1;
  if (sort === "priceAsc")
    sortFunction = (a, b) => ((a.price || 0) > (b.price || 0) ? -1 : 1);
  if (sort === "priceDesc")
    sortFunction = (a, b) => ((a.price || 0) < (b.price || 0) ? -1 : 1);
  if (sort === "nameAsc")
    sortFunction = (a, b) =>
      (a.description || "") > (b.description || "") ? -1 : 1;
  if (sort === "nameDesc")
    sortFunction = (a, b) =>
      (a.description || "") < (b.description || "") ? -1 : 1;

  const productElements = products
    ?.filter(filterSearchFunction)
    .filter((product) => (category ? product.category === category : true))
    .sort(sortFunction)
    .map((item) => <Product key={item.id} {...item} />);
  return <>{productElements}</>;
}

export default Products;
