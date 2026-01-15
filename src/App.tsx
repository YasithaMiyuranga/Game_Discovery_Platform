import { Grid, GridItem, HStack, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import GameGrid from "./components/ui/GameGrid";

function App() {

  const showSidebar = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
    >
      <GridItem area="nav" bg="black" p="4" color="white">
        <NavBar />
      </GridItem>

      {showSidebar && (
        <GridItem area="aside" bg={"red"}>
          Side Bar
        </GridItem>
      )}

      <GridItem area="main" bg="green" p="4" color="white">
        <GameGrid />
      </GridItem>

      <GridItem area="footer" bg="yellow" p="4" color="black">
        Footer
      </GridItem>
    </Grid>
  );

}
export default App;
