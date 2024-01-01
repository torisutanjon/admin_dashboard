import { Button, Flex, Image } from "@chakra-ui/react";
const SearchBarButton = () => {
  return (
    <Button
      size="xs"
      bg="myColors.main"
      borderLeftRadius="0"
      colorScheme="none"
    >
      <Flex h="100%" w="100%" alignItems="center" justifyContent="center">
        <Image
          src="images/search-icon.png"
          boxSize="12px"
          alt=""
          objectFit="contain"
        />
      </Flex>
    </Button>
  );
};

export default SearchBarButton;
