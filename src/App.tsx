import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import TableComponent from "./components/TableComponent";

function App() {
  return (
    <Box width="100vw">
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: "100vw", lg: "120px 1fr" }}
        alignContent="flex-start"
      >
        <GridItem area="nav" padding={3}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <Sidebar />
          </GridItem>
        </Show>
        <GridItem area="main">
          <TableComponent />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
