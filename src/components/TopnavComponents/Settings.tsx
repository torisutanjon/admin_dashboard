import { Box, Flex, Image } from "@chakra-ui/react";
const Settings = () => {
  return (
    <Box as="button" marginRight="1.25em" h="14px" w="14px" px={0} py={0}>
      <Flex alignItems="center" justifyContent="center">
        <Image
          src="images/settings-gear.png"
          alt=""
          boxSize="100%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
};

export default Settings;
