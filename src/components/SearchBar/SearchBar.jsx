import { FaSearch } from "react-icons/fa";
import { Button, Form, Input, Searchbar } from "./SearchBar.styled";

export const SearchBar = ({ inputValue, onSubmit, onChange }) => {
  return (
    <Searchbar>
      <Form onClick={onSubmit}>
        <Button aria-label="search button">
          <FaSearch />
        </Button>
        <Input
          type="text"
          autoComplete="off"
          title="May contain only letters, @, dots."
          required
          autoFocus
          placeholder="Input email"
          onChange={onChange}
          value={inputValue}
        />
      </Form>
    </Searchbar>
  );
};
