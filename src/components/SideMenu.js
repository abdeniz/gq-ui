import {ChevronDownIcon, Icon, SettingsIcon} from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Flex,
  GridItem,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import {useState} from "react";
import {FiDatabase} from "react-icons/fi";
import {GrNodes} from "react-icons/gr";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";

const SideMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <GridItem
      bg="#fff"
      borderRight="solid 1px #efefef"
      position="relative"
      transition="all 2s"
    >
      <Flex
        flexDirection="column"
        height="100%"
        paddingLeft="4"
        paddingRight="4"
        paddingTop="6"
        paddingBottom="6"
      >
        <Menu>
          {isCollapsed ? (
            <MenuButton
              as={IconButton}
              icon={<SettingsIcon />}
              marginBottom="6"
            />
          ) : (
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
          )}
          <MenuList>
            <MenuItem>Social Media</MenuItem>
            <MenuItem>Something Else</MenuItem>
          </MenuList>
        </Menu>
        <Divider marginBottom={6} />
        {isCollapsed ? (
          <>
            <IconButton
              marginBottom="4"
              icon={<Icon w="6" h="6" color="#121212" as={GrNodes} />}
            />
            <IconButton
              icon={<Icon w="6" h="6" color="#676873" as={FiDatabase} />}
            />
          </>
        ) : (
          <>
            <Link>
              <Flex alignItems="center" marginBottom="4">
                <Icon w="6" h="6" color="#121212" as={GrNodes} />
                <Text color="#121212" fontWeight="semibold" marginLeft="4">
                  Query
                </Text>
              </Flex>
            </Link>
            <Link>
              <Flex alignItems="center">
                <Icon w="6" h="6" color="#676873" as={FiDatabase} />
                <Text color="#676873" fontWeight="semibold" marginLeft="4">
                  Databases
                </Text>
              </Flex>
            </Link>
          </>
        )}
      </Flex>

      <IconButton
        position="absolute"
        bottom="16"
        right="-5"
        color="#121212"
        zIndex={1}
        icon={
          isCollapsed ? (
            <Icon w="6" h="6" as={TbLayoutSidebarLeftExpand} />
          ) : (
            <Icon w="6" h="6" as={TbLayoutSidebarLeftCollapse} />
          )
        }
        onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}
      />
    </GridItem>
  );
};

export default SideMenu;
