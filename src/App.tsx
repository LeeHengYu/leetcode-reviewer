import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid templateAreas={`"nav nav" "aside main"`} w="100%">
      <GridItem area="nav" bg="coral">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
