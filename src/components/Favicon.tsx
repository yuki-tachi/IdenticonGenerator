/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Stack from '@mui/material/Stack';

const faviconFrame = css`
    outline: solid 4px #bdbdbd;
    background-color: white;
`
const favicon128 = css`
    width: 128px;
    height: 128px;
`
const favicon64 = css`
    width: 64px;
    height: 64px;
`
const favicon32 = css`
    width: 32px;
    height: 32px;
`

type FaviconPropsType = {
    svg: string;
}

const Favicon = (props:FaviconPropsType) => {
    return (
        <>
            <Stack justifyContent={'center'} alignItems="baseline" direction="row" spacing={4}>
                <div css={[faviconFrame, favicon128]} dangerouslySetInnerHTML={{ __html: props.svg }}/>
                <div css={[faviconFrame, favicon64]} dangerouslySetInnerHTML={{ __html: props.svg }} />
                <div css={[faviconFrame, favicon32]} dangerouslySetInnerHTML={{ __html: props.svg }} />
            </Stack>
            {/* <p className="favicon-code">{props.svg}</p> */}
        </>
    )
}

export default Favicon;