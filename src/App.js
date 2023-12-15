import Nav from "./Navigation/Nav";
import Product from "./Product/Product";
import Recomended from "./Recomended/Recomended";
import "./index.css"
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import data from "./db/data"

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Nav/>
      <Recomended/>
      <Product/>
    </div>
  );
}

export default App;
