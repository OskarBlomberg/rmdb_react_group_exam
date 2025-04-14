import "./header.css";
import logo from "../../assets/rmdb_logo.png";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import SearchResultPage from "../../pages/SearchResultPage/SearchResultPage";

export default function Header() {
  const [searchUrl, setSearchUrl] = useState(null);
  const { data, isLoading, isError } = useFetch(searchUrl);

  const handleForm = (formData) => {
    const search = formData.get("searchInput");
    const apiKey = "3b30178e&s";
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;
    setSearchUrl(url);
  };

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="RMDB logo" width={352} height={110} />
        </div>
        <form action={handleForm} className="header__form">
          <input
            type="text"
            className="header__form__input"
            name="searchInput"
          />
          <button type="submit" className="header__form__btn">
            Search title
          </button>
        </form>
        <p className="header__link">Favourites</p>
      </header>
      <SearchResultPage movies={data?.Search} />
    </>
  );
}
