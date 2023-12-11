import { Flex } from "@chakra-ui/react";
import { SideNav, MainContainer } from "./components";
function App() {
  return (
    <Flex h={"100vh"} w={"100vw"} bg={"myColors.second"} flexDir={"row"}>
      <SideNav />
      <MainContainer />
    </Flex>
  );
}

export default App;
