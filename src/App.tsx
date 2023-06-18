import { Box, Grid, GridItem, Show, useColorMode } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import TableComponent from "./components/TableComponent";

function App() {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "gray.800" : "gray.100";

  return (
    <Box width="100%" overflowX="hidden" backgroundColor={bgColor}>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: "100%", lg: "120px 1fr" }}
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
