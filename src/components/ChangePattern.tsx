import Button from '@mui/material/Button';

type ChangePatternPropsType = {
    handleChange:() => void
}

const ChangePattern = (props:ChangePatternPropsType) => {
    return (
        <Button variant='outlined' onClick={props.handleChange}>Change Pattern</Button>
    )
}

export default ChangePattern;