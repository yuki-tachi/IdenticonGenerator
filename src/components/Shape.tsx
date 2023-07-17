import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type ShapePropsType = {
    handleShape:(shape: string) => void;
}

const Shape = (props: ShapePropsType) => {
    const [shapeType, setShapeType] = React.useState('rect');
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="shape-label">Shape</InputLabel>
                <Select labelId="shape-label" label="Shape" id="shape" value={shapeType} onChange={(e) => {
                    const shapeType = e.target.value as string;
                    setShapeType(shapeType)
                    props.handleShape(shapeType);
                }}>
                    <MenuItem value="rect">rect</MenuItem>
                    <MenuItem value="circle">circle</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default Shape;