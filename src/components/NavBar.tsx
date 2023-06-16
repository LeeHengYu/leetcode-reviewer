import { Box, HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack>
      <Text width="80px" paddingLeft={3}>
        place
      </Text>
      <SearchInput />
      <Box whiteSpace="nowrap"></Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
