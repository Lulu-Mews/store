import React, { useState } from "react";
import Flex from "../shared/Flex/Flex";
import Button from "../shared/Button/Button";
import { Collapse } from "../shared/Collapse/Collapse";
import { useGetProducts } from "../../context/productContext";
import CategoryButton from "./CategoryButton";

export const ProductFilters = () => {
  const [collapsed, setCollapsed] = useState();
  const products = useGetProducts();
  const categories = products.item.reduce((acc, product) => {
    if (
      !product?.category ||
      acc.findIndex(
        (category) => category.props.category === product.category
      ) !== -1
    )
      return acc;

    return [...acc, <CategoryButton category={product.category} />];
  }, []);
  const isMobile = window.visualViewport.width < 500;
  return (
    <Flex
      width={isMobile ? "100%" : "calc(20% - 24px)"}
      spacing={!isMobile ? { right: "24px" } : {}}
      isVertical
    >
      <Button height="24px" onClick={() => setCollapsed((v) => !v)}>
        collapse
      </Button>
      <Collapse isClosed={collapsed}>
        <Flex isVertical>{categories}</Flex>
      </Collapse>
    </Flex>
  );
};
