type ColorPickPropsType = {
    handleColor:(e: any) => void;
    color:string;
}

const ColorPick = (props: ColorPickPropsType) => {
    return (
        <>
            <label htmlFor="color">Color</label>
            <input type="color" id="color" name="color" onChange={props.handleColor} value={props.color}/>
        </>
    )
}

export default ColorPick;