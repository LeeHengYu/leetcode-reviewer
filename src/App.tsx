import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import TableComponent from "./components/TableComponent";

function App() {
  return (
    <Box width="100vw">
      <Grid
        templateAreas={`"nav nav" "aside main"`}
        templateColumns={"120px 1fr"}
        width="100%"
        height="100vh"
        alignContent="flex-start"
      >
        <GridItem area="nav" padding={3}>
          <NavBar />
        </GridItem>
        <GridItem area="aside">
          <Sidebar />
        </GridItem>
        <GridItem area="main">
          <TableComponent />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
