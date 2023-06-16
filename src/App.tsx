import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import TableComponent from "./components/TableComponent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Box width="1425px">
      <Grid
        templateAreas={`"nav nav" "aside main"`}
        templateColumns={"180px 1fr"}
        width="100%"
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
