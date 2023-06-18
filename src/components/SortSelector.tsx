import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: Challenge Date
      </MenuButton>
      <MenuList>
        <MenuItem>Difficulty</MenuItem>
        <MenuItem>Category</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
