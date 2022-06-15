import {Box, Flex, Icon, IconButton} from "@chakra-ui/react";
import {FiZoomIn, FiZoomOut} from "react-icons/fi";

const ZoomButtons = () => {
  return (
    <Box position="absolute" right="6" top="6">
      <Flex flexDir="column">
        <IconButton
          variant="outline"
          icon={<Icon margin="2" w="6" h="6" color="#676873" as={FiZoomIn} />}
          color="#676873"
          marginBottom="2"
        />
        <IconButton
          variant="outline"
          icon={<Icon margin="2" w="6" h="6" color="#676873" as={FiZoomOut} />}
          color="#676873"
        />
      </Flex>
    </Box>
  );
};

export default ZoomButtons;
