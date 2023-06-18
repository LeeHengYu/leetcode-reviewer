import { Button } from "@chakra-ui/react";
import useQuestionFilterStore from "../stores/QuestionFilterStore";
import useQuestionSortingStore from "../stores/QuestionSortingStore";

const Reseter = () => {
  const { setCategory, setDifficulty, setSearchText } =
    useQuestionFilterStore();
  const { setBy } = useQuestionSortingStore();

  const onReset = () => {
    setCategory("");
    setDifficulty("");
    setSearchText("");
    setBy("");
  };

  return (
    <Button onClick={onReset} colorScheme="linkedin">
      Reset
    </Button>
  );
};

export default Reseter;
