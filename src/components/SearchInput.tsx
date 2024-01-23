import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { FormEvent, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import InputRefContexts from "../contexts/inputRefContexts";
import useQuestionFilterStore from "../stores/QuestionFilterStore";

const SearchInput = () => {
  const setSearchText = useQuestionFilterStore((s) => s.setSearchText);
  // const [input, setInput] = useState('');

  const { inputRef: ref } = useContext(InputRefContexts);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!ref.current?.value) return;
    setSearchText(ref.current.value);
    // redirect(`/?search=${ref.current.value}`); // needs setting up router provider
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} pointerEvents="none" />
        <Input
          borderRadius={20}
          placeholder="Search questions..."
          variant="filled"
          ref={ref}
        />
        <InputRightElement
          children={<RxCross1 />}
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
