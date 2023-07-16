type SvgPropsType = {
    svg: string;
}

const Svg = (props:SvgPropsType) => {
    return (
        <>
            <div className="favicon" dangerouslySetInnerHTML={{ __html: props.svg }} />
            <p className="favicon-code">{props.svg}</p>
        </>
    )
}

export default Svg;