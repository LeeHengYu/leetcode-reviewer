import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useQuestionSortingStore from "../stores/QuestionSortingStore";
import useQuestionFilterStore from "../stores/QuestionFilterStore";

const SortSelector = () => {
  const by = useQuestionSortingStore((s) => s.sortingCriteria.by);
  const setBy = useQuestionSortingStore((s) => s.setBy);

  const mapping = ["Name", "category", "difficulty", "date"];
  const { onlyDC } = useQuestionFilterStore((s) => s.filters);
  const setDC = useQuestionFilterStore((s) => s.setDC);

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Sort by: {by?.toUpperCase() || "DATE"}
        </MenuButton>
        <MenuList>
          {mapping.map((type) => (
            <MenuItem key={type} onClick={() => setBy(type.toLowerCase())}>
              {type.toUpperCase()}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <Text size="lg">Only DC</Text>
      <Switch
        colorScheme="yellow"
        isChecked={onlyDC}
        onChange={() => setDC(!onlyDC)}
        size="lg"
      ></Switch>
    </>
  );
};

export default SortSelector;
