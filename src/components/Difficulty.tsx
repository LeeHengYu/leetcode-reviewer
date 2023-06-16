import { Badge } from "@chakra-ui/react";

interface Props {
  diff: string;
}

const Difficulty = ({ diff }: Props) => {
  const color =
    diff === "Easy" ? "green" : diff === "Medium" ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="6px">
      {diff}
    </Badge>
  );
};

export default Difficulty;
