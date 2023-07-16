type ResultPropsType = {
    division:number;
}

const Result = (props: ResultPropsType) => {
    return (
        <p>division:{props.division}</p>
    )
}

export default Result;