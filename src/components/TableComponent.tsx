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
import { useState } from "react";
import tableData from "../data/tablaData";
import sortData from "../hook/sortData";
import Difficulty from "./Difficulty";
import ScriptLoader from "./ScriptLoader";

const TableComponent = () => {
  const [selectedSolution, setSelectedSolution] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSolutionClick = (solution: string) => {
    setSelectedSolution(solution);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedSolution("");
    setIsModalOpen(false);
  };

  // const handleCopyClick = () => {
  //   // Logic to copy the solution script contents
  //   // const scriptPath = `./PythonScripts/${selectedSolution}`;
  //   console.log(`Copied contents`);
  // };

  return (
    <Box>
      <Table variant="striped" size="lg">
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
              <Td color="blue.500">
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
                  color="blue.500"
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

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Solution: {selectedSolution}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Code
              display="block"
              whiteSpace="pre"
              maxHeight="80vh"
              overflowY="scroll"
              mb={4}
            >
              <ScriptLoader selectedSolution={selectedSolution} />
            </Code>
            <Button>Copy Script Contents</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default TableComponent;
