import { useState } from "react";
import Flex from "../shared/Flex";
import Button from "../shared/Button";
import Collapse from "../shared/Collapse";
import { useGetProducts } from "../../context/productContext";
import CategoryButton from "./CategoryButton";

export const ProductFilters = () => {
  const isMobile = (window.visualViewport?.width || 0) < 500;
  const [collapsed, setCollapsed] = useState(isMobile);
  const products = useGetProducts();
  const categories = products?.reduce((acc,  product) => {
    console.log(product?.category)
    if (
      product?.category &&
      !acc.find(
        (category) => category.props.category === product.category
      ) 
    )
      acc.push(
        <CategoryButton key={product.category} category={product.category} />
      );

    return acc;
  }, [] as JSX.Element[]);
  return (
    <>
      <Button
        height="24px"
        onClick={() => setCollapsed((v) => !v)}
        spacing={{ bottom: collapsed ? "0" : "8px" }}
      >
        {collapsed ? "expand" : "collapse"}
      </Button>
      <Collapse isClosed={collapsed}>
        <Flex isVertical>{categories}</Flex>
      </Collapse>
    </>
  );
};
