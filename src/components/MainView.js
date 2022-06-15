import {TriangleUpIcon} from "@chakra-ui/icons";
import {Button, GridItem} from "@chakra-ui/react";
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
        <Button
          bg="#FF5454"
          color="#fff"
          size="lg"
          fontSize="md"
          position="absolute"
          right="8"
          bottom="8"
          _hover={{
            bg: "#D1464E",
          }}
        >
          <TriangleUpIcon transform="rotate(90deg)" marginRight={2} /> Run query
        </Button>
      </GridItem>
    </>
  );
};

export default MainView;
