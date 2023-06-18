import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useQuestionFilterStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useQuestionFilterStore((s) => s.setSearchText);

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
      </InputGroup>
    </form>
  );
};

export default SearchInput;
