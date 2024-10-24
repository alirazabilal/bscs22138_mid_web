import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Movie from "./Components/Movie";
import Favourites from "./Components/Favourites";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footercomp from "./Components/Footercomp";
import Movieone from "./Components/Movieone";
// import { titleContext } from "./Components/Context/Context";
function App() {
  const [title, setTitle] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Header />
          <Home />
          <Footercomp />
        </>
      ),
    },
    {
      path: "/movies/:id",
      element: (
        <>
          <Navbar />
          <Header />

          <Movieone />
          <Footercomp />
        </>
      ),
    },
    {
      path: "/favourites",
      element: (
        <>
          <Navbar />
          <Header />

          <Favourites />
          <Footercomp />
        </>
      ),
    },
  ]);
  return (
    <>
      {/* <titleContext.Provider value={{ title }}> */}
      <RouterProvider router={router} />
      {/* </titleContext.Provider> */}
    </>
  );
}

export default App;
