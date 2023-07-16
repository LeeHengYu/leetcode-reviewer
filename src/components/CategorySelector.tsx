import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import categories from "../data/categories";
import useQuestionFilterStore from "../stores/QuestionFilterStore";

const CategorySelector = () => {
  const setCategory = useQuestionFilterStore((s) => s.setCategory);
  const category = useQuestionFilterStore((s) => s.filters.category);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {category || "Category"}
      </MenuButton>
      <MenuList>
        <MenuItem key="all" onClick={() => setCategory("")}>
          All
        </MenuItem>
        {categories.sort().map((cat) => (
          <MenuItem onClick={() => setCategory(cat)} key={cat}>
            {cat}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CategorySelector;
