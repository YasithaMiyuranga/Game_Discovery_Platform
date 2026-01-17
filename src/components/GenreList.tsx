import useGenre from "../hooks/useGenre";
import { List, ListItem ,Image,HStack,Text} from "@chakra-ui/react";
import getOptimizedImageUrl from "../services/image-url";


const GenreList = () => {
  const { data } = useGenre();
  return (
    <List.Root listStyle={"none"} >
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getOptimizedImageUrl(genre.image_background)}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
