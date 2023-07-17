type ShapePropsType = {
    handleShape:(shape: string) => void
}

const Shape = (props: ShapePropsType) => {
    return (
        <select name="shape" onChange={e => props.handleShape(e.target.value)}>
            <option value="rect">rect</option>
            <option value="circle">circle</option>
        </select>
    )
}

export default Shape;