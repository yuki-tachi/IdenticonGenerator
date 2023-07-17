type ChangePatternPropsType = {
    handleChange:() => void
}

const ChangePattern = (props:ChangePatternPropsType) => {
    return (
        <button type="button" onClick={props.handleChange}>Change Pattern</button>
    )
}

export default ChangePattern;