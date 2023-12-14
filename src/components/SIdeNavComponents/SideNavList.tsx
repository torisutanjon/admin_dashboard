import { useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { imageMap } from "../../utils";

const SideNavList = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(3);

  const onClickHandler = (index: number) => {
    if (index === 0) return;
    if (index === 4) return;
    if (index === 12) return;
    setCurrentIndex(index);
  };

  const radiusHandler = (index: number) => {
    if (currentIndex === index) return "12px";
    if (Math.abs(index - currentIndex) > 1) return "0px";
    if (currentIndex < index) return "0 12px 0 0";
    if (currentIndex > index) return "0 0 12px 0";
  };

  return (
    <Box h="100%" w="75%" position="absolute" zIndex="2" right="0">
      <Box h="10%" w="100%" bg="myColors.main"></Box>
      {Array.from({ length: 13 }).map((_, index) => {
        const image = imageMap.get(index);
        return (
          <Flex
            as="button"
            key={index}
            h={index === 0 ? "5%" : index === 12 ? "0%" : "5%"}
            w="100%"
            bg={currentIndex === index ? "myColors.second" : "myColors.main"}
            borderRadius={radiusHandler(index)}
            alignItems="center"
            justifyContent="center"
            onClick={() => onClickHandler(index)}
          >
            <Box h="50%" w="50%">
              {image && (
                <Image
                  src={currentIndex === index ? image[0] : image[1]}
                  alt=""
                />
              )}
            </Box>
          </Flex>
        );
      })}
      <Box h="30%" w="100%" bg="myColors.main"></Box>
    </Box>
  );
};

export default SideNavList;
