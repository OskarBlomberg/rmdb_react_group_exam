import "./header.css";
import logo from "../../assets/rmdb_logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import SearchResultPage from "../../pages/SearchResultPage/SearchResultPage";

export default function Header({ searchUrl, setSearchUrl }) {
  const navigate = useNavigate();

  const handleForm = (formData) => {
    const search = formData.get("searchInput");
    const apiKey = "3b30178e&s";
    setSearchUrl(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}&type=movie`
    );
    navigate("/searchresults");
  };

  return (
    <>
      <header className="header">
        <Link to={"/"} className="header__logo" aria-label="Link to homepage">
          <img src={logo} alt="RMDB logo" width={352} height={110} />
        </Link>
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
        <Link to={"/watchlist"} className="header__link">
          Watchlist
        </Link>
      </header>
    </>
  );
}
