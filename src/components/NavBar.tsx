import { HStack, Link, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack>
      <Text>NavBar</Text>
      <Link href="#">Link1</Link>
      <Link href="#">Link2</Link>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
