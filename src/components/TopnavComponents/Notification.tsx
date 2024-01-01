import { Box, Flex, Image } from "@chakra-ui/react";

const Notifications = () => {
  return (
    <Box as="button" marginRight="0.75em" h="12px" w="12px" px={0} py={0}>
      <Flex alignItems="center" justifyContent="center">
        <Image
          src="images/notification-gear.png"
          alt=""
          boxSize="100%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
};

export default Notifications;
