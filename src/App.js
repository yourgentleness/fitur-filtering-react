import { useState } from "react";
import Nav from "./Navigation/Nav";
import Product from "./Product/Product";
import Recomended from "./Recomended/Recomended";
import "./index.css"
import Sidebar from "./Sidebar/Sidebar";
import data from "./db/data"
import Card from "./Components/Card";

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null)
  
  const [query, setQuery] = useState("")

  // Filtering Input 
  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }
  const filteredItem = data.filter(
    (data) => data.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  )

  // Filtering Radio
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }
  // Filtering Button
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  // Applying Filtering Feature
  const filteredData = (products, selected, query) => {

    if (query) products = filteredItem

    if (selected) { 
      products = products.filter(
        ({category, color, newPrice, company, title}) => 
          category === selected ||
          color === selected ||
          newPrice === selected ||
          company === selected ||
          title === selected
      )
    }

    return (
      products.map(
        ({img, title, star, reviews, prevPrice, newPrice}) => (
          <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          />
      )
      )
    )
  }

  const result = filteredData(data, selectedCategory, query)

  return (
    <div className="app">
      <Sidebar handleChange={handleChange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recomended handleClick={handleClick}/>
      <Product result={result}/>
    </div>
  )
}

export default App;
