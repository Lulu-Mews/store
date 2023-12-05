import { useState } from "react";
import Flex from "../Flex/Flex";
import Button from "../Button/Button";
import searchIcon from "../../../assets/search-svgrepo-com.svg";
import Image from "../Image/Image";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

function Search() {
  const [query] = useSearchParams();
  const [search, setSearchText] = useState(query.get("query"));
  const navigate = useNavigate();
  const clickSearch = () => {
    const urlEncodedSearch = encodeURI(search);
    navigate({
      pathname: "/products",
      search: createSearchParams({
        query: urlEncodedSearch,
      }).toString(),
    });
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") clickSearch();
  };
  return (
    <Flex>
      <input
        onKeyDown={handleKeyPress}
        value={search || ""}
        onChange={(e) => setSearchText(e.currentTarget.value)}
        type="text"
      />
      <Button onClick={clickSearch}>
        <Image src={searchIcon} alt="search" width="16px" />
      </Button>
    </Flex>
  );
}

export default Search;
