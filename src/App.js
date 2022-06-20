import {ChakraProvider} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import AppView from "./components/AppView";
import LoginView from "./components/LoginView";
import {supabase} from "./utils/supabaseClient";

const App = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <ChakraProvider resetCSS>
      {!session ? <LoginView /> : <AppView session={session} />}
    </ChakraProvider>
  );
};

export default App;
