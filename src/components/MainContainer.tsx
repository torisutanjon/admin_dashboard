import { Box, Flex } from "@chakra-ui/react";
import { TopNav } from "./index";
const MainContainer = () => {
  return (
    <Box h="100%" w="calc(100% - 3em)">
      <Flex flexDirection="column" alignItems="flex-start">
        <TopNav />
      </Flex>
    </Box>
  );
};

export default MainContainer;
