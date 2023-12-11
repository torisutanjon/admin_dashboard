import { Box, Flex, Image } from "@chakra-ui/react";
import { notification_icon } from "../../assets";

const Notifications = () => {
  return (
    <Box as="button" marginRight="0.5em" h="14px" w="14px" px={0} py={0}>
      <Flex alignItems="center" justifyContent="center">
        <Image
          src={notification_icon}
          alt=""
          boxSize="100%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
};

export default Notifications;
