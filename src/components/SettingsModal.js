import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import getAvatar from "../utils/getAvatar";
import {supabase} from "../utils/supabaseClient";
import AvatarUpload from "./AvatarUpload";

const SettingsModal = ({isOpen, onClose, session}) => {
  const [avatarUrl, setAvatarUrl] = useState();

  useEffect(() => {
    const currentUser = supabase.auth.user();
    getAvatar(currentUser).then((avatarUrl) => setAvatarUrl(avatarUrl));
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Profile settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <AvatarUpload avatarUrl={avatarUrl} />
        </ModalBody>

        <ModalFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="red" onClick={onClose}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SettingsModal;
