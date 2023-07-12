import {
  Box,
  Button,
  Code,
  HStack,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useReducer, useState } from "react";
import ScriptContext from "../contexts/scriptContexts";
import tableData from "../data/tablaData";
import DataQuery from "../hook/dataQuery";
import dataSorting from "../hook/dataSorting";
import scriptReducer from "../reducers/scriptReducer";
import useQuestionFilterStore from "../stores/QuestionFilterStore";
import useQuestionSortingStore from "../stores/QuestionSortingStore";
import CategorySelector from "./CategorySelector";
import Difficulty from "./Difficulty";
import DifficultySelector from "./DifficultySelector";
import Reseter from "./Reseter";
import ScriptLoader from "./ScriptLoader";
import SortSelector from "./SortSelector";

const TableComponent = () => {
  const [selectedSolution, setSelectedSolution] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [script, dispatch] = useReducer(scriptReducer, "");

  const filters = useQuestionFilterStore((s) => s.filters);

  const by = useQuestionSortingStore((s) => s.sortingCriteria.by);
  const [reversed, setReversed] = useState(false);

  const handleSolutionClick = (solution: string) => {
    setSelectedSolution(solution);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedSolution("");
    setIsModalOpen(false);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(script).catch((error) => {
      console.error("Error copying text:", error);
    });
  };

  return (
    <Box>
      <HStack paddingLeft={1} marginY={2} justifyContent="space-between">
        <HStack spacing={5}>
          <DifficultySelector />
          <CategorySelector />
          <SortSelector />
          <Button onClick={() => setReversed(!reversed)} colorScheme="linkedin">
            Reverse Sorting
          </Button>
          <Reseter />
        </HStack>
        <Text
          fontWeight="bold"
          fontFamily="sans-serif"
          marginRight={2}
          fontSize="xl"
        >
          Count: {tableData.length}
        </Text>
      </HStack>
      <Table variant="striped" size="lg" fontFamily="mono">
        <Thead>
          <Tr>
            <Th>Question</Th>
            <Th>Difficulty</Th>
            <Th>Category</Th>
            <Th>Solution</Th>
            <Th whiteSpace="nowrap">Daily Challenge</Th>
          </Tr>
        </Thead>
        <Tbody whiteSpace="nowrap">
          {dataSorting(DataQuery(tableData, filters), reversed, by)?.map(
            (item, index) => (
              <Tr key={index}>
                <Td color="blue.300" minWidth="400px">
                  <Link href={item.link} target="_blank">
                    {item.question}
                  </Link>
                </Td>
                <Td>
                  <Difficulty diff={item.difficulty} />
                </Td>
                <Td>{item.category}</Td>
                <Td>
                  <Link
                    color="blue.300"
                    onClick={() => handleSolutionClick(item.solution)}
                  >
                    Solution
                  </Link>
                </Td>
                <Td>{item.dailyChallenge?.toLocaleDateString()}</Td>
              </Tr>
            )
          )}
        </Tbody>
      </Table>
      <ScriptContext.Provider value={{ script, dispatch }}>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="3xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Solution: {selectedSolution}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Code
                display="block"
                whiteSpace="pre"
                maxHeight="70vh"
                overflowY="scroll"
                mb={4}
              >
                <ScriptLoader selectedSolution={selectedSolution} />
              </Code>
              <Button onClick={handleCopyClick} marginBottom={2}>
                Copy Code
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </ScriptContext.Provider>
    </Box>
  );
};

export default TableComponent;
