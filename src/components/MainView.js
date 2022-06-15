import {GridItem} from "@chakra-ui/react";
import React from "react";
import ZoomButtons from "./ZoomButtons";

const MainView = () => {
  return (
    <>
      <GridItem
        bgImg="radial-gradient(#e6e6e6 2px, transparent 0)"
        bgSize="40px 40px"
        bgColor="#fafafa"
        position="relative"
      >
        <ZoomButtons />
      </GridItem>
    </>
  );
};

export default MainView;
