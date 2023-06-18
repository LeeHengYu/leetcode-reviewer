import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import InputRefContexts from "../contexts/inputRefContexts";
import useQuestionFilterStore from "../stores/QuestionFilterStore";

const SearchInput = () => {
  const setSearchText = useQuestionFilterStore((s) => s.setSearchText);

  const { inputRef: ref } = useContext(InputRefContexts);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} pointerEvents="none" />
        <Input
          borderRadius={20}
          placeholder="Search questions..."
          variant="filled"
          ref={ref}
        />
        <InputRightElement
          children={<ImCross />}
          cursor="pointer"
          onClick={() => {
            if (ref.current) ref.current.value = "";
            setSearchText("");
          }}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
