import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/SKY_Game.png";
import SearchInput from "./SearchInput";
import { ColorModeButton } from "./ui/color-mode";

interface NavbarProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: NavbarProps) => {
  return (
    <HStack padding={"20px"} justifyContent={"space-between"}>
      <Image src={logo} height={{ base: "40px", md: "50px", lg: "76px" }} />
      <HStack gap={3}>
         <SearchInput onSearch={onSearch}/>
        <ColorModeButton />
       
      </HStack>
    </HStack>
  );
};

export default NavBar;
