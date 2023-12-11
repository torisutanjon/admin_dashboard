import { Flex } from "@chakra-ui/react";
import {
  SearchBar,
  Notifications,
  Settings,
  Profile,
} from "./TopnavComponents";
const TopNav = () => {
  return (
    <Flex
      position="relative"
      bg="myColors.accent"
      h="3em"
      w="100%"
      alignItems="center"
      justifyContent="flex-start"
    >
      <SearchBar />
      <Flex w="50%" alignItems="center" justifyContent="flex-end">
        <Notifications />
        <Settings />
        <Profile />
      </Flex>
    </Flex>
  );
};

export default TopNav;
