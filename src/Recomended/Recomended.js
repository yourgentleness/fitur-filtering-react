import Button from "../Components/Button"
import "./Recomended.css"

const Recomended = () => {
  return (
    <>
      <div>
        <h3 className="recomended-title">Recomended</h3>
        <div className="recomended-flex">
          <Button value={""} title="All product"/>
          <Button value={"Nike"} title="Nike"/>
          <Button value={"puma"} title="Puma"/>
          <Button value={"adidas"} title="Adidas"/>
          <Button value={"Vans"} title="Vans"/>
        </div>
      </div>
    </>
  )
}

export default Recomended;