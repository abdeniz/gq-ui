import {Grid} from "@chakra-ui/react";
import React from "react";
import MainMenu from "./MainMenu";
import MainSection from "./MainSection";
import SideMenu from "./SideMenu";

const AppView = () => {
  return (
    <Grid
      h="100vh"
      templateColumns="minmax(50px, min-content) auto"
      templateRows="60px auto"
    >
      <MainMenu />

      <SideMenu />

      <MainSection />
    </Grid>
  );
};

export default AppView;
