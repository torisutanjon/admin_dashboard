import { Button, Flex, Image } from "@chakra-ui/react";
import { search_icon } from "../../assets";
const SearchBarButton = () => {
  return (
    <Button size="xs" bg="myColors.main" borderLeftRadius="0">
      <Flex h="100%" w="100%" alignItems="center" justifyContent="center">
        <Image src={search_icon} boxSize="12px" alt="" objectFit="contain" />
      </Flex>
    </Button>
  );
};

export default SearchBarButton;
