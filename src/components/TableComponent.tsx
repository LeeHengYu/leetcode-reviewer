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
import ReactPaginate from 'react-paginate';
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

import '../styles.css';

const TableComponent = () => {
  const [selectedSolution, setSelectedSolution] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Copy");

  const [script, dispatch] = useReducer(scriptReducer, "");

  const filters = useQuestionFilterStore((s) => s.filters);

  const by = useQuestionSortingStore((s) => s.sortingCriteria.by);
  const [reversed, setReversed] = useState(false);

  const questions_data = dataSorting(DataQuery(tableData, filters), reversed, by);

  const handleSolutionClick = (solution: string) => {
    setSelectedSolution(solution);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedSolution("");
    setIsModalOpen(false);
    setButtonText("Copy");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(script).catch((error) => {
      console.error("Error copying text:", error);
    });
    setButtonText("Copied!");
  };


  // pagination setting
  var itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentQuestions = questions_data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(questions_data.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % questions_data.length;
    setItemOffset(newOffset);
  }


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
          Count: {tableData.length} (
          {tableData.filter((q) => q.difficulty === "Easy").length}/
          {tableData.filter((q) => q.difficulty === "Medium").length}/
          {tableData.filter((q) => q.difficulty === "Hard").length})
        </Text>
      </HStack>
      <Table variant="striped" size="lg" fontFamily="mono" marginBottom={2}> 
      {/* can refactor into a new components */}
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
          {currentQuestions.map(
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
      <div className="pagination">
        <ReactPaginate
          nextLabel="NEXT >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< PREV"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
      <ScriptContext.Provider value={{ script, dispatch }}>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="3xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Solution</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
              <Code
                display="flow"
                whiteSpace="pre"
                maxHeight="60%"
                overflowY="scroll"
                mb={4}
                colorScheme="purple"
              >
                <ScriptLoader selectedSolution={selectedSolution} />
              </Code>
              <Button onClick={handleCopyClick} paddingX={4} marginBottom={2}>
                {buttonText}
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </ScriptContext.Provider>
    </Box>
  );
};

export default TableComponent;
