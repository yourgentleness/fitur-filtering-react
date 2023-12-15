import Button from "../Components/Button"
import "./Recomended.css"

const Recomended = ({ handleClick }) => {
  return (
    <>
      <div className="recomended-container">
        <h3 className="recomended-title">Recomended</h3>
        <div className="recomended-flex">
          <Button onClickHandler={handleClick} value={""} title="All product"/>
          <Button onClickHandler={handleClick} value={"Nike"} title="Nike"/>
          <Button onClickHandler={handleClick} value={"puma"} title="Puma"/>
          <Button onClickHandler={handleClick} value={"adidas"} title="Adidas"/>
          <Button onClickHandler={handleClick} value={"Vans"} title="Vans"/>
        </div>
      </div>
    </>
  )
}

export default Recomended;