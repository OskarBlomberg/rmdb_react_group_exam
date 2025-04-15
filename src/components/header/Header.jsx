import "./header.css";
import logo from "../../assets/rmdb_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header({ setSearchUrl }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleForm = (formData) => {
    const search = formData.get("searchInput").trim();
    const apiKey = "3b30178e&s";
    setSearchUrl(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}*&type=movie`
    );
    navigate("/searchresults");
  };

  const isValid = searchTerm.trim().length >= 3;

  return (
    <>
      <header className="header">
        <Link to={"/"} className="header__logo" aria-label="Link to homepage">
          <img src={logo} alt="RMDB logo" width={352} height={110} />
        </Link>
        <form action={handleForm} className="header__form">
          <input
            type="text"
            placeholder="Search by title"
            aria-label="Search for movie by title. Use at least three characters."
            className="header__form__input"
            name="searchInput"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="header__form__btn"
            disabled={!isValid}
          >
            Search
          </button>
        </form>
        <Link to={"/watchlist"} className="header__link">
          Watchlist
        </Link>
      </header>
    </>
  );
}
