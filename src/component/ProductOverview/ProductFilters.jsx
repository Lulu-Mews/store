import React, { useState } from "react";
import Flex from "../shared/Flex/Flex";
import Button from "../shared/Button/Button";
import { Collapse } from "../shared/Collapse/Collapse";

export const ProductFilters = () => {
  const [collapsed, setCollapsed] = useState();
  const isMobile = window.visualViewport.width < 500;
  return (
    <Flex
      width={isMobile ? "100%" : "calc(25% - 24px)"}
      spacing={isMobile ? { right: "24px" } : {}}
      isVertical
    >
      <Button height="24px" onClick={() => setCollapsed((v) => !v)}>
        collapse
      </Button>
      <Collapse isClosed={collapsed}>ProductFilters</Collapse>
    </Flex>
  );
};
