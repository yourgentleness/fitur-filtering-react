import Input from "../../Components/Input";
import "./Color.css"

const Color = ({ handleChange })=> {
    return (
        <div className="sidebar-item">
            <h1 className="sidebar-title color-title">Color</h1>
            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" name="test1" value={""}/> 
                <span className="checkmark all"></span>
                All
            </label>
            <Input
            handleChange={handleChange}
            value={"black"}
            title={"Black"}
            name={"test1"}
            color={"black"}
            />
            <Input
            handleChange={handleChange}
            value={"blue"}
            title={"Blue"}
            name={"test1"}
            color={"blue"}
            />
            <Input
            handleChange={handleChange}
            value={"red"}
            title={"Red"}
            name={"test1"}
            color={"red"}
            />
            <Input
            handleChange={handleChange}
            value={"green"}
            title={"Green"}
            name={"test1"}
            color={"green"}
            />
            <label className="sidebar-label-container">
                <input
                onChange={handleChange}
                type="radio"
                value={"white"}
                name="test1"
                />
                <span 
                className="checkmark white"
                ></span>
                White
            </label>
        </div>
    )
}

export default Color;