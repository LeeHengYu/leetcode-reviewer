import { Heading, Link, VStack } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <VStack paddingY={2}>
      <Heading size="md">Other Links</Heading>
      <Link href="#" marginY={2}>
        Link
      </Link>
      <Link href="#" marginY={2}>
        Link
      </Link>
      <Link href="#" marginY={2}>
        Link
      </Link>
      <Link href="#" marginY={2}>
        Link
      </Link>
    </VStack>
  );
};

export default Sidebar;
