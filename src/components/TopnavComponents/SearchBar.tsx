import { Flex } from "@chakra-ui/react";
import { SearchInput, SearchBarButton } from "./index";
const SearchBar = () => {
  return (
    <Flex
      h="24px"
      w="50%"
      marginLeft="0.5em"
      alignItems="center"
      justifyContent="center"
      borderStyle="solid"
      borderColor="myColors.second"
      borderWidth="1px"
      borderRadius="6px"
      overflow="hidden"
    >
      <SearchInput />
      <SearchBarButton />
    </Flex>
  );
};

export default SearchBar;
