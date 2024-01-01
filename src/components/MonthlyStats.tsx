import { Flex, Text } from "@chakra-ui/react";

interface IProps {
  title: string;
  description: string;
  data: string;
  change: string;
  changeTypeValue: string;
  changeType: boolean;
}

const MonthlStats = (prop: IProps) => {
  return (
    <Flex
      flexDir="column"
      alignItems="start"
      justifyContent="space-between"
      mt="0.5rem"
      h="13.33%"
      paddingX="0.25rem"
      paddingY="0.1rem"
      w="100%"
      bg="myColors.accent"
      rounded="6px"
    >
      <Flex flexDir="column">
        <Text fontSize="12px" color="blackAlpha.600" fontWeight="bold">
          {prop.title}
        </Text>
        <Text
          fontSize={["10px", "xs"]}
          color="blackAlpha.600"
          fontWeight="medium"
        >
          {prop.description}
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" w="100%">
        <Text fontSize="11px" color="blackAlpha.700" fontWeight="bold">
          {prop.data}
        </Text>
        <Flex alignItems="flex-end" justifyContent="flex-end">
          <Text
            fontSize="xs"
            color={prop.changeType ? "green.400" : "red.300"}
            fontWeight="bold"
          >
            {prop.change}
          </Text>
          &nbsp;
          <Text fontSize="10px" color="blackAlpha.500" fontWeight="bold">
            {prop.changeTypeValue}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MonthlStats;
