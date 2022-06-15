import {GridItem} from "@chakra-ui/react";
import React from "react";
import ZoomControl from "./ZoomControl";

const MainView = () => {
  return (
    <>
      <GridItem
        bgImg="radial-gradient(#e6e6e6 2px, transparent 0)"
        bgSize="40px 40px"
        bgColor="#fafafa"
        position="relative"
      >
        <ZoomControl />
      </GridItem>
    </>
  );
};

export default MainView;
