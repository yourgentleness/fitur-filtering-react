import Input from "../../Components/Input";
import "./Price.css"

const Price= ({ handleChange }) => {
  return (
    <div className="sidebar-item">
      <h2 className="sidebar-title">Price</h2>
      <Input
      handleChange={handleChange}
      value={""}
      name={"test2"}
      title={"All"}
      />
      <Input
      handleChange={handleChange}
      value={"50"}
      name={"test2"}
      title={"$0 - $50"}
      />
      <Input
      handleChange={handleChange}
      value={"100"}
      name={"test2"}
      title={"$50 - $100"}
      />
      <Input
      handleChange={handleChange}
      value={"150"}
      name={"test2"}
      title={"$100 - $150"}
      />
      <Input
      handleChange={handleChange}
      value={"200"}
      name={"test2"}
      title={"Over $150"}
      />
    </div>
  )
}

export default Price;