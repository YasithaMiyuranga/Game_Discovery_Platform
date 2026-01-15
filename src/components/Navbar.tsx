import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt="React Logo" boxSize="50px" />
      <Text fontSize="2xl" fontWeight="bold" color="white">
        NavBar
      </Text>
    </HStack>
  );
};

export default NavBar;
