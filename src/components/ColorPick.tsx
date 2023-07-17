type ColorPickPropsType = {
    handleColor:(e: any) => void;
    color:string;
}

const ColorPick = (props: ColorPickPropsType) => {
    return (
        <div>
            {/* <label htmlFor="color" style={{marginRight: "8px"}}>Color</label> */}
            <input type="color" id="color" name="color" onChange={props.handleColor} value={props.color}/>
            <label htmlFor="color"> {props.color}</label>
        </div>
    )
}

export default ColorPick;