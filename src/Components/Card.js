import React from "react";
import { IoBagAdd } from "react-icons/io5";

function Card({ img, title, star, reviwes, prevPrice, newPrice }) {
    return (
        <>
        <section className="card-container">
          <section className="card">
          <img className="card-img" alt={title} src={img}/>
          <div className="card-detail">
            <h3 className="card-title">{title}</h3>
          </div>
  
          <section className="card-reviews">
            <div className="rating-star">
                {star} {star} {star} {star}
            </div>
            
            <span className="total-reviews">4</span>
          </section>
          
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> <b>{newPrice}</b>
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

export default Card;