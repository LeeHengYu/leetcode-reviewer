import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useQuestionFilterStore, { Difficulty } from "../stores/QuestionFilterStore";

const DifficultySelector = () => {
  const setDifficulty = useQuestionFilterStore((s) => s.setDifficulty);
  const difficulty = useQuestionFilterStore((s) => s.filters.difficulty);
  const difficulties: Difficulty[] = ["Easy", "Medium", "Hard"];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {difficulty === "All" ? "Difficulty" : difficulty}
      </MenuButton>
      <MenuList>
        <MenuItem key="all" onClick={() => setDifficulty("All")}>
          All
        </MenuItem>
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
