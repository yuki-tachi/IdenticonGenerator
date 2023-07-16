type DivisionPropsType = {
    handleDivision:(division: number) => void
}

const Division = (props: DivisionPropsType) => {
    return (
        <>
            <input type="number" name="division" onChange={(e) => {
                if(Number(e.target.value) > 0){
                    props.handleDivision(Number(e.target.value))}
                }
            }/>
        </>

    )
};

export default Division;