import { useState } from "react";
import { useRoutes } from "react-router";
import routes from "./routes";
import "./App.css";

function App() {

  const router = useRoutes(routes)

  return (
    <>
     {router}
    </>
  );
}

export default App;
