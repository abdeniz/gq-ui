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
  useDisclosure,
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import logo from "../img/logo.svg";
import getAvatar from "../utils/getAvatar";
import {supabase} from "../utils/supabaseClient";
import SettingsModal from "./SettingsModal";

const MainMenu = ({session}) => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [name, setName] = useState("");

  const {isOpen, onOpen, onClose} = useDisclosure();

  useEffect(() => {
    const currentUser = supabase.auth.user();
    getAvatar(currentUser).then((avatarUrl) => setAvatarUrl(avatarUrl));
    setName(
      currentUser.user_metadata.full_name ?? currentUser.user_metadata.user_name
    );
  }, [session]);

  return (
    <>
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
              src={avatarUrl}
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
                <MenuItem onClick={onOpen}>Settings</MenuItem>
                <MenuItem onClick={() => supabase.auth.signOut()}>
                  Sign out
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </GridItem>
      <SettingsModal session={session} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default MainMenu;
