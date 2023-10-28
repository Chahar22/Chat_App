import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import backgroundImageUrl from "../bg3.jpeg";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="teal.50"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="5px"
        borderColor={"teal.400"}
      >
        {/* bg="#F0F0F0" // Background color for visualization p={3}
        m="40px 0 15px 0" w="100%" borderRadius={"lg"}
        borderWidth="5px" borderColor="teal" >
        <Text fontSize="4xl" color="teal">
          WhatsApp
        </Text> */}
        <Text color="teal" fontSize="5xl">
          WhatsApp
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        bgImage={`url(${backgroundImageUrl})`}
      >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab backgroundColor={"white"} color={"black"}>
              Login
            </Tab>
            <Tab backgroundColor={"white"} color={"black"}>
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
