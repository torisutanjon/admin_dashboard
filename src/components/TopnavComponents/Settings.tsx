import { Box, Flex, Image } from "@chakra-ui/react";
import { settings_gear } from "../../assets";

const Settings = () => {
  return (
    <Box as="button" marginRight="1.25em" h="16px" w="16px" px={0} py={0}>
      <Flex alignItems="center" justifyContent="center">
        <Image src={settings_gear} alt="" boxSize="100%" objectFit="cover" />
      </Flex>
    </Box>
  );
};

export default Settings;
