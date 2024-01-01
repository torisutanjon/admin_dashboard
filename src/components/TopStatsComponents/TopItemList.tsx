import { Flex, Text } from "@chakra-ui/react";
import { TopStatsInterface } from "../../utils/interfaces";
const TopItemList = ({ prop }: { prop: TopStatsInterface[] }) => {
  const colors = ["blue.500", "red.500", "green.200", "purple.500"];
  return prop.map((data, key) => {
    return (
      <Flex
        key={`${data.item}${key}`}
        mt="0.25rem"
        position="relative"
        width="100%"
        flexDir="column"
        alignItems="start"
        justifyContent="start"
      >
        <Text fontSize="10px" color="blackAlpha.600">
          {data.item}
        </Text>
        <Text fontSize="sm" color={colors[key]}>
          {data.value}
        </Text>
      </Flex>
    );
  });
};

export default TopItemList;
