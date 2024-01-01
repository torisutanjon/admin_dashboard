import { Flex, Text } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Flex flexDir="column" mt="1rem" ml="1rem">
      <Text fontWeight="medium" fontSize="12px" color="blackAlpha.700">
        Welcome To Dashboard
      </Text>
      <Text fontWeight="medium" fontSize="10px" color="blackAlpha.500">
        Home / Dashboard
      </Text>
    </Flex>
  );
};

export default Banner;
