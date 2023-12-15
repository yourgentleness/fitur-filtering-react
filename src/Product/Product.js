import { FaStar } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import "./Product.css"

function Product({ result }) {
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  )
}

export default Product