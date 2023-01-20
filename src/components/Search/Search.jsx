import "./Search.sass";
import useMediaQuery from "../../utils/hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Search = ({ handleSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 880px)");
  const [searchInput, setSearchInput] = useState('');

  let location = useLocation()

  useEffect(() => {
    if (isMobile) {
      setIsSearchOpen(true)
    } else setIsSearchOpen(false)
  }, [isMobile]);

  useEffect(() => {
    setIsSearchOpen(false)
  }, [location])

  const handleOpenSearch = () => {
    setIsSearchOpen(true);
  };

  function submitSearch(event) {
    event.preventDefault();
    handleSearch(searchInput)
  }

  const clearInput = () => {
    setSearchInput('')
  }

  return (
    <div className="search">
      <form
        className={isSearchOpen ? "search__form" : "search__form_type_hidden"}
        onSubmit={submitSearch}
      >
        <input
          type="text"
          className="search__input"
          onChange={event => setSearchInput(event.target.value)}
          placeholder="Найти..."
          value={searchInput}
        />
        <button className="search__clear-button" onClick={clearInput}/>
      </form>
      <button
        className={
          isSearchOpen
            ? "search__button"
            : "search__button search__button_type_hidden"
        }
        onClick={isSearchOpen ? submitSearch : handleOpenSearch}
      ></button>
    </div>
  );
};
