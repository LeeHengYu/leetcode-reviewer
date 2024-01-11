import { Box, Heading, Icon, Image, Link, VStack, createIcon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineMail,
} from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaPodcast } from "react-icons/fa";

const leetCodeIcon = createIcon({
  displayName: 'LeetCode Icon',
  d: 'M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z'
})

const iconMap: { [key: string]: IconType } = {
  Linkedin: BsLinkedin,
  Podcast: FaPodcast,
  Instagram: AiOutlineInstagram,
  Linktree: AiOutlineLink,
  "Contact Me": AiOutlineMail,
};

const links = [
  {text: "Linkedin", url: "https://www.linkedin.com/in/heng-yu-lee-4b179420a/"},
  {text: "Linktree", url: "https://linktr.ee/hengyulee"},
  {text: "Contact Me", url: "mailto:hengyuli901229@gmail.com"}
];


const Sidebar = () => {
  return (
    <VStack paddingY={2}>
      <Heading size="md" marginBottom={2}>
        Links
      </Heading>
      <Box marginLeft={2} marginY={2} key="leetcode" boxSize={7}>
        <Link href = "https://leetcode.com/hengyulee">
          <Icon as={leetCodeIcon} color="white"/>
        </Link>
      </Box>
      {links.map((data) => (
        <Box marginLeft={2} marginY={2} key={data.text} boxSize={7}>
          <Link href={data.url} target="_blank">
            <Icon as={iconMap[data.text]} color="gray.500" />
          </Link>
        </Box>
      ))}
    </VStack>
  );
};

export default Sidebar;
