import TextField from '@mui/material/TextField';

type DivisionPropsType = {
    division:number;
    handleDivision:(division: number) => void
}

const Division = (props: DivisionPropsType) => {
    return (
        <>
            {/* <label htmlFor="division">分割数</label> */}
            <TextField type="number" InputLabelProps={{shrink: true}} label="division" id="division" value={props.division} onChange={(e) => {
                if(Number(e.target.value) > 0){
                    props.handleDivision(Number(e.target.value))}
                }
            }/>
        </>

    )
};

export default Division;