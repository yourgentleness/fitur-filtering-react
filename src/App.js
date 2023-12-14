import Nav from "./Navigation/Nav";
import Product from "./Product/Product";
import Recomended from "./Recomended/Recomended";
import "./index.css"
import Sidebar from "./Sidebar/Sidebar";

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
