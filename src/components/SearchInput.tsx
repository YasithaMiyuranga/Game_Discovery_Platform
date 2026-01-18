import { Input } from "@chakra-ui/react";
import { useRef } from "react";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "400px", display: "flex", justifyContent: "flex-end" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current) onSearch(inputRef.current.value);
      }}
    >
      <Input
        ref={inputRef}
        display={{ base: "none", md: "flex" }}
        width={"400px"}
        borderWidth={2.5}
        borderColor={"white"}
        borderRadius={20}
        variant={"outline"}
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchInput;
