import { Box, Heading, Icon, Link, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineMail,
} from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaPodcast } from "react-icons/fa";
import links from "../data/links";

const iconMap: { [key: string]: IconType } = {
  Linkedin: BsLinkedin,
  Podcast: FaPodcast,
  Instagram: AiOutlineInstagram,
  Linktree: AiOutlineLink,
  "Contact Me": AiOutlineMail,
};

const Sidebar = () => {
  return (
    <VStack paddingY={2}>
      <Heading size="md" marginBottom={2}>
        Other Links
      </Heading>
      {links.map((data) => (
        <Box margin={2} key={data.text}>
          <Icon as={iconMap[data.text]} color="gray.500" marginRight={1} />
          <Link href={data.url} target="_blank">
            {data.text}
          </Link>
        </Box>
      ))}
    </VStack>
  );
};

export default Sidebar;
