import {ChakraProvider, Grid} from "@chakra-ui/react";
import MainMenu from "./components/MainMenu";
import MainView from "./components/MainView";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <ChakraProvider resetCSS>
      <Grid
        h="100vh"
        templateColumns="minmax(50px, min-content) auto"
        templateRows="60px auto"
      >
        <MainMenu />

        <SideMenu />

        <MainView />
      </Grid>
    </ChakraProvider>
  );
}

export default App;
