import {Box, Button, FormLabel, Image, Input} from "@chakra-ui/react";
import uploadAvatar from "../utils/uploadAvatar";

const AvatarUpload = ({avatarUrl}) => {
  return (
    <Box display="flex" justifyContent="space-around" alignItems="center">
      <Image
        boxSize="150px"
        rounded={100}
        src={avatarUrl}
        fallbackSrc="https://via.placeholder.com/150"
        htmlFor="uploadAvatar"
      />

      <Button as={FormLabel} htmlFor="uploadAvatar" cursor="pointer">
        Upload new avatar
      </Button>

      <Input
        display="none"
        type="file"
        id="uploadAvatar"
        accept="image/*"
        onChange={uploadAvatar}
      />
    </Box>
  );
};

export default AvatarUpload;
