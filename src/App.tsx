import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { Button } from "./components/ui/button";

function App() {
  return(
   <Grid
      templateAreas={`"nav nav" "aside main"  "footer footer"`}>
      <GridItem area="nav" bg="blue" p="4" color="white">
        NavBar
      </GridItem>

      <GridItem area="aside" bg="red" p="4" color="white">
        Side Bar
      </GridItem>
      
      <GridItem area="main" bg="green" p="4" color="white">
        Main Content
      </GridItem>
      
      <GridItem area="footer" bg="yellow" p="4" color="black">
        Footer
      </GridItem>
    </Grid>
  );
  
}
export default App;
