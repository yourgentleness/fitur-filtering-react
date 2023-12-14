import { FaStar } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import "./Product.css"

function Product() {
  return (
    <>
      <section className="card-container">
        <section className="card">
        <img className="card-img" alt="" src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"/>
        <div className="card-detail">
          <h3 className="card-title">Nike </h3>
        </div>

        <section className="card-reviews">
          <div className="rating-star">
            <FaStar/> <FaStar/> <FaStar/> <FaStar/>
          </div>
          
          <span className="total-reviews">4</span>
        </section>
        
        <section className="card-price">
          <div className="price">
            <del>$100</del> <b>$80</b>
          </div>
          <div className="bag-icon">
            <IoBagAdd/>
          </div>
        </section>
        
        </section>
      </section>
    </>
  )
}

export default Product