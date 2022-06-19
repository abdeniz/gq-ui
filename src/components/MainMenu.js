import {ChevronDownIcon} from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Flex,
  GridItem,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import logo from "../img/logo.svg";
import {supabase} from "../utils/supabaseClient";

const MainMenu = () => {
  const [name, setName] = useState();

  useEffect(() => {
    const user = supabase.auth.user();
    setName(user.user_metadata.full_name);
  }, []);

  return (
    <GridItem
      bg="#fff"
      rowSpan={1}
      colSpan={2}
      borderBottom="solid 1px #efefef"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        height="100%"
        paddingLeft="6"
        paddingRight="6"
      >
        <Image src={logo} alt="logo" />
        <Flex alignItems="center">
          <Avatar
            name={name}
            size="sm"
            marginRight={2}
            boxShadow="0px 0px 4px rgba(0, 0, 0, 0.25)"
          />
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              fontSize="sm"
              rightIcon={<ChevronDownIcon />}
            >
              {name}
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem onClick={() => supabase.auth.signOut()}>
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default MainMenu;
