import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useQuestionFilterStore from "../store";

const DifficultySelector = () => {
  const setDifficulty = useQuestionFilterStore((s) => s.setDifficulty);
  const difficulty = useQuestionFilterStore((s) => s.filters.difficulty);
  const difficulties = ["Easy", "Medium", "Hard"];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {difficulty || "Difficulty"}
      </MenuButton>
      <MenuList>
        {difficulties.map((difficulty) => (
          <MenuItem onClick={() => setDifficulty(difficulty)} key={difficulty}>
            {difficulty}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DifficultySelector;
