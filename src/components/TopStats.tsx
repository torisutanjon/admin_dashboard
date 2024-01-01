import { Flex, Text } from "@chakra-ui/react";
import { TopItemList } from "./TopStatsComponents";
import { TopStatsInterface } from "../utils/interfaces";
const TopStats = ({ prop }: { prop: TopStatsInterface[] }) => {
  return (
    <Flex
      mt="0.5rem"
      h="42.5%"
      w="100%"
      flexDir="column"
      alignItems="start"
      justifyContent="start"
      bg="myColors.accent"
      rounded="6px"
      padding="2"
    >
      <Text fontSize="xs">Top Products</Text>
      <TopItemList prop={prop} />
    </Flex>
  );
};

export default TopStats;
