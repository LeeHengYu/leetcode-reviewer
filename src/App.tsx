import {
  Box,
  Grid,
  GridItem,
  Show,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import TableComponent from "./components/TableComponent";
import InputRefContexts from "./contexts/inputRefContexts";
import { useRef } from "react";

function App() {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "gray.800" : "white";

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Box width="100%" overflowX="hidden" backgroundColor={bgColor}>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: "100%", lg: "120px 1fr" }}
        alignContent="flex-start"
      >
        <InputRefContexts.Provider value={{ inputRef: inputRef }}>
          <GridItem area="nav" padding={2}>
            <NavBar />
            <Text
              as="h4"
              color={"CaptionText"}
              bg="purple.500"
              fontSize="xl"
              paddingY={"1"}
              align={"center"}
              fontFamily={"serif"}
            >
              Thanks for your visit. We have stopped uploading new DC solutions
              since 2024.
            </Text>
          </GridItem>
          <Show above="lg">
            <GridItem area="aside">
              <Sidebar />
            </GridItem>
          </Show>
          <GridItem area="main">
            <TableComponent />
          </GridItem>
        </InputRefContexts.Provider>
      </Grid>
    </Box>
  );
}

export default App;
