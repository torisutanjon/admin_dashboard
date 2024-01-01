import { Flex, Text } from "@chakra-ui/react";

const DailySales = () => {
  return (
    <Flex
      h="15%"
      w="100%"
      flexDir="column"
      bg="myColors.main"
      rounded="6px"
      padding="6px"
    >
      <Flex flexDir="column">
        <Text color="white" fontSize="14px" fontWeight="500">
          Daily
        </Text>
        <Text color="white" fontSize="11px">
          Sales
        </Text>
      </Flex>
      <Text color="white" textAlign="center" fontSize="2xl" fontWeight="bold">
        108
      </Text>
    </Flex>
  );
};

export default DailySales;
