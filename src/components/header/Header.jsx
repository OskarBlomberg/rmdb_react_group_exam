import "./header.css";
import logo from "../../assets/rmdb_logo.png";



export default function Header() {
 
  
  const handleForm = (formData) => {
    const search = formData.get("searchInput");
   console.log(search)
  };

 
 

  

  return (
    
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="RMDB logo" width={352} height={110} />
      </div>
      <form action={handleForm} className="header__form">
        <input type="text" className="header__form__input" name="searchInput" />
        <button type="submit" className="header__form__btn">
          Search title
        </button>
      </form>
      <p className="header__link">Favourites</p>
    </header>

    

   
 
   
  );
}
