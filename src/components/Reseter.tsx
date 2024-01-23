import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import InputRefContexts from "../contexts/inputRefContexts";
import useQuestionFilterStore from "../stores/QuestionFilterStore";
import useQuestionSortingStore from "../stores/QuestionSortingStore";

const Reseter = () => {
  const { setCategory, setDifficulty, setSearchText } =
    useQuestionFilterStore();
  const { setBy } = useQuestionSortingStore();

  const { inputRef: ref } = useContext(InputRefContexts);

  const onReset = () => {
    setCategory("");
    setDifficulty("All");
    setSearchText("");
    setBy("");
    if (ref.current) ref.current.value = "";
  };

  return (
    <Button onClick={onReset} colorScheme="linkedin">
      Reset
    </Button>
  );
};

export default Reseter;
