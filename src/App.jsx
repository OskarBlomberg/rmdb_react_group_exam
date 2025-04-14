import { Route, Routes, Link } from "react-router-dom";
import Search from "./search";
import Home from "./home";import "./App.css";
import Header from "./components/header/Header";

function App() {
  return (
  <>
  <nav>
    <ul>
    <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/search">search</Link>
      </li>
    </ul>
  </nav>
   <Routes>
    <Route path="/" element={ <Home /> } />
    <Route path="/search" element={ <Search />}> 
     {/*  <Route path=":id" element={ <Search /> } /> */}
    </Route>
    <Route path="*" element={<Error /> } />
   </Routes>
  </>
  )
}

export default App;

{/* <section className='app'>
      <h1>StartPage</h1>
   </section>  */}