import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useQuestionSortingStore from "../stores/QuestionSortingStore";

const SortSelector = () => {
  const by = useQuestionSortingStore((s) => s.sortingCriteria.by);
  const setBy = useQuestionSortingStore((s) => s.setBy);

  const mapping = ["category", "difficulty"];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: {by || "Challenge Date"}
      </MenuButton>
      <MenuList>
        {mapping.map((type) => (
          <MenuItem key={type} onClick={() => setBy(type)}>
            {type}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
