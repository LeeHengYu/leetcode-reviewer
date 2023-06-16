import { Box, HStack, Link, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack>
      <Text width="100px" paddingLeft={3}>
        placeholder
      </Text>
      <SearchInput />
      <Box whiteSpace="nowrap">
        <HStack padding={5} bg="black">
          <Link href="#">Link1</Link>
          <Link href="#">Link2</Link>
          <Link href="#">Link3</Link>
        </HStack>
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
