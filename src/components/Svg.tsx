import Stack from '@mui/material/Stack';
type SvgPropsType = {
    svg: string;
}

const Svg = (props:SvgPropsType) => {
    return (
        <>
            <Stack alignItems="baseline" direction="row" spacing={4}>
                <div className="favicon-frame favicon-128" dangerouslySetInnerHTML={{ __html: props.svg }} />
                <div className="favicon-frame favicon-64" dangerouslySetInnerHTML={{ __html: props.svg }} />
                <div className="favicon-frame favicon-32" dangerouslySetInnerHTML={{ __html: props.svg }} />
            </Stack>
            <p className="favicon-code">{props.svg}</p>
        </>
    )
}

export default Svg;