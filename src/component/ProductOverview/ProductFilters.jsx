import React, { useState } from "react";
import Flex from "../shared/Flex/Flex";
import Button from "../shared/Button/Button";
import { Collapse } from "../shared/Collapse/Collapse";
import { useGetProducts } from "../../context/productContext";
import CategoryButton from "./CategoryButton";

export const ProductFilters = () => {
  const isMobile = window.visualViewport.width < 500;
  const [collapsed, setCollapsed] = useState(isMobile);
  const products = useGetProducts();
  const categories = products.item.reduce((acc, product) => {
    if (
      !product?.category ||
      acc.findIndex(
        (category) => category.props.category === product.category
      ) !== -1
    )
      return acc;

    return [
      ...acc,
      <CategoryButton key={product.category} category={product.category} />,
    ];
  }, []);
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
