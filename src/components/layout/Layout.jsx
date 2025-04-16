import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import { useState } from "react";

function Layout() {
  const [searchUrl, setSearchUrl] = useState(null);

  return (
    <>
      <Header searchUrl={searchUrl} setSearchUrl={setSearchUrl} />
      <Outlet
        context={{
          searchUrl,
          setSearchUrl,
        }}
      />
    </>
  );
}

export default Layout;
