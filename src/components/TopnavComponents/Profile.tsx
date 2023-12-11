import { Box, Image } from "@chakra-ui/react";
import { profile_icon } from "../../assets";
const Profile = () => {
  return (
    <Box
      as="button"
      h="28px"
      w="28px"
      borderRadius="50%"
      marginRight="12px"
      overflow="hidden"
    >
      <Image src={profile_icon} boxSize="100%" alt="" />
    </Box>
  );
};

export default Profile;
