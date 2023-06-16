import { Grid, GridItem } from "@chakra-ui/react";
// import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={`"nav nav" "aside main"`}
      templateColumns={"200px 1fr"}
    >
      <GridItem area="nav">NavBar</GridItem>

      <GridItem area="aside" bg="gold">
        Aside
      </GridItem>

      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
