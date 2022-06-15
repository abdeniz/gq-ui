import {ChevronDownIcon, Icon} from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Flex,
  GridItem,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import {FiDatabase} from "react-icons/fi";
import {GrNodes} from "react-icons/gr";

const SideMenu = () => {
  return (
    <GridItem bg="#fff" borderRight="solid 1px #efefef">
      <Flex
        flexDirection="column"
        height="100%"
        paddingLeft="4"
        paddingRight="4"
        paddingTop="6"
        paddingBottom="6"
      >
        <Menu>
          <MenuButton
            as={Button}
            variant="outline"
            rightIcon={<ChevronDownIcon />}
            textAlign="left"
            size="lg"
            padding="4"
            marginBottom="6"
          >
            <Text fontSize="sm" marginBottom="1">
              University Courses
            </Text>
            <Text fontSize="xs" color="#676873">
              connected | 167.184.116.45
            </Text>
          </MenuButton>
          <MenuList>
            <MenuItem>Social Media</MenuItem>
            <MenuItem>Something Else</MenuItem>
          </MenuList>
        </Menu>
        <Divider marginBottom={6} />
        <Link>
          <Flex alignItems="center" marginBottom="4">
            <Icon color="#121212" as={GrNodes} marginRight="4" />
            <Text color="#121212" fontWeight="semibold">
              Query
            </Text>
          </Flex>
        </Link>
        <Link>
          <Flex alignItems="center">
            <Icon color="#676873" as={FiDatabase} marginRight="4" />
            <Text color="#676873" fontWeight="semibold">
              Databases
            </Text>
          </Flex>
        </Link>
      </Flex>
    </GridItem>
  );
};

export default SideMenu;
