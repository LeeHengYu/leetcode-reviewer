import {
  Box,
  Button,
  Code,
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
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useReducer, useState } from "react";
import tableData from "../data/tablaData";
import sortData from "../hook/sortData";
import Difficulty from "./Difficulty";
import ScriptLoader from "./ScriptLoader";
import scriptReducer from "../reducers/scriptReducer";
import ScriptContext from "../contexts/scriptContexts";

const TableComponent = () => {
  const [selectedSolution, setSelectedSolution] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [script, dispatch] = useReducer(scriptReducer, "");

  const handleSolutionClick = (solution: string) => {
    setSelectedSolution(solution);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedSolution("");
    setIsModalOpen(false);
  };

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(script)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying text:", error);
      });
  };

  return (
    <Box>
      <Table variant="striped" size="lg" fontFamily="mono">
        <Thead>
          <Tr>
            <Th>Question</Th>
            <Th>Difficulty</Th>
            <Th>Category</Th>
            <Th>Solution</Th>
            <Th>Daily Challenge</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortData(tableData)?.map((item, index) => (
            <Tr key={index}>
              <Td color="blue.300">
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
              <Td>{item.dailyChallenge}</Td>
            </Tr>
          ))}
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
                Copy
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </ScriptContext.Provider>
    </Box>
  );
};

export default TableComponent;
