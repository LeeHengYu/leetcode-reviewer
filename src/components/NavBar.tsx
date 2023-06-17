import { Box, HStack, Img, Link } from "@chakra-ui/react";
import Microphone from "../assets/icon_mic2.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack>
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        <Img src={Microphone} boxSize="30px" alt="Microphone" color="white" />
      </Link>
      <SearchInput />
      <Box></Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
