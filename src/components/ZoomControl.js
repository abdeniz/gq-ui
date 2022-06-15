import {Box, Flex, Icon, IconButton} from "@chakra-ui/react";
import {FiZoomIn, FiZoomOut} from "react-icons/fi";

const ZoomControl = () => {
  return (
    <Box position="absolute" right="6" top="6">
      <Flex flexDir="column">
        <IconButton
          variant="outline"
          icon={<Icon margin="2" w="6" h="6" as={FiZoomIn} />}
          bg="#fff"
          marginBottom="2"
          color="#121212"
        />
        <IconButton
          variant="outline"
          icon={<Icon margin="2" w="6" h="6" as={FiZoomOut} />}
          color="#121212"
          bg="#fff"
        />
      </Flex>
    </Box>
  );
};

export default ZoomControl;
