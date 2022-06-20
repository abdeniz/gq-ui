import {Box, Button, FormLabel, Image, Input} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import getAvatar from "../utils/getAvatar";
import {supabase} from "../utils/supabaseClient";
import uploadAvatar from "../utils/uploadAvatar";

const AvatarUpload = () => {
  const [avatarUrl, setAvatarUrl] = useState();

  useEffect(() => {
    const currentUser = supabase.auth.user();
    getAvatar(currentUser).then((avatarUrl) => setAvatarUrl(avatarUrl));

    const subscription = supabase
      .from("profiles")
      .on("*", (payload) => {
        setAvatarUrl(payload.new.avatar_url);
      })
      .subscribe();

    return () => supabase.removeSubscription(subscription);
  }, []);

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
