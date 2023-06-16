import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Box width="100vw">
      <Grid
        templateAreas={`"nav nav" "aside main"`}
        templateColumns={"200px 1fr"}
        width="100%"
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
