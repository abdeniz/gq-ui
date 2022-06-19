import {Box, Button, Text} from "@chakra-ui/react";
import React, {useState} from "react";
import {supabase} from "../utils/supabaseClient";
import {FaGithub} from "react-icons/fa";

const LoginView = () => {
  const [error, setError] = useState();

  async function signInWithGithub() {
    const {error} = await supabase.auth.signIn({
      provider: "github",
    });

    setError(error);
  }

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      onClick={() => signInWithGithub()}
    >
      <Button marginBottom="4" colorScheme="gray" leftIcon={<FaGithub />}>
        Sign in with GitHub
      </Button>
      <Text color="red.500">{error?.message}</Text>
    </Box>
  );
};

export default LoginView;
