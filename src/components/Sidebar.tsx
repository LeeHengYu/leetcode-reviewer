import { Box, Heading, Link, VStack } from "@chakra-ui/react";
import links from "../data/links";

const Sidebar = () => {
  return (
    <VStack paddingY={2}>
      <Heading size="md" marginBottom={2}>
        Other Links
      </Heading>
      {links.map((data) => (
        <Box marginY={2}>
          <Link href={data.url} target="_blank">
            {data.text}
          </Link>
        </Box>
      ))}
      ;
    </VStack>
  );
};

export default Sidebar;
