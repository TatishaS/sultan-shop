import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { setSearchValue } from "../redux/filter/slice";

const HeaderSearch = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const { searchValue } = useAppSelector((state) => state.filter);
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
    dispatch(setSearchValue(value));
    setValue("");
    searchInputRef.current?.focus();
  };

  return (
    <div className="header__search">
      <form
        className="header__search-form search"
        onSubmit={handleSearchSubmit}
      >
        <input
          type="text"
          className="search__input"
          placeholder="Поиск..."
          value={value}
          onChange={handleSearchInput}
          ref={searchInputRef}
        />
        <button className="search__btn" type="submit"></button>
      </form>
    </div>
  );
};

export default HeaderSearch;
