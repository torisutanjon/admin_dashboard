import { Flex, Box } from "@chakra-ui/react";
import { SideNavList } from "./SIdeNavComponents";
const SideNav = () => {
  return (
    <Flex h="100%" w="3em" position="relative">
      <Box h="100%" w="50%" bg="myColors.main"></Box>
      <SideNavList />
    </Flex>
  );
};

export default SideNav;
