import {useState, useEffect} from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

// components
import Division from './components/Division';
import Shape from './components/Shape';
import ChangePattern from './components/ChangePattern';
import ColorPick from './components/ColorPick';

import {GetDrawSvg, IDrawableSvg, Rect, Circle} from './Svg';
import Generate from './Pattern';
import Favicon from './components/Favicon';

import Typography from '@mui/material/Typography';
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>

const TITLE = "Identicon Generator";
const DEFAULT_DIVISION: number = 5;
const FILE_NAME = "favicon.svg";

function GetDrawSvgStr(pattern:boolean[][], shape:IDrawableSvg): string {
  const svgStr = GetDrawSvg(pattern, shape);
    
  // ファビコンを変更
    const linkIcon = document.querySelector<HTMLLinkElement>("link[rel*='icon']");
    if(linkIcon){
        linkIcon.href = 'data:image/svg+xml;base64,' + btoa(svgStr);
    }

  return svgStr;
}

function App() {
  const initRect = new Rect();
  initRect.setSize(DEFAULT_DIVISION)
  const [shape, setShape] = useState<IDrawableSvg>(initRect);
  const [svg, setSvg] = useState<string>("");
  const [division, setDivision] = useState<number>(DEFAULT_DIVISION);
  const [pattern, setPattern] = useState<boolean[][]>(Generate(DEFAULT_DIVISION));
  const [color, setColor] = useState('#B30F3A');

  // 初回一回のみ呼び出すタイミングで実行される、初期表示用
  useEffect(() => {
    document.title = TITLE;
    shape.setSize(division);
    const svgStr = GetDrawSvgStr(pattern, shape);
    setSvg(svgStr);
  }, []);

  useEffect(() => {
    shape.fill = color;
    shape.setSize(division);

    setSvg(GetDrawSvgStr(pattern, shape));
  },[division, pattern, shape, color]);

  const handleDivision = (division: number) => {
    setDivision(division);
    setPattern(Generate(division));
  };

  const handleShape = (shapeType:string) => {
    let currentShape:IDrawableSvg;
    switch (shapeType) {
      case "rect":
        currentShape = new Rect();
        break;
      case "circle":
        currentShape = new Circle();
        break;
      default:
        currentShape = new Rect();
        break;
    }
  
    setShape(currentShape);
  };

  const handleChange = () => {
    setPattern(Generate(division));
  };

  // クリップボードにコピーするコード
  // const copyToClipboard = async () => {
  //   await global.navigator.clipboard.writeText(svg);
  // };

  const downloadSvg = () => {
    const svgDataUrl = 'data:image/svg+xml;base64,' + btoa(svg);
    const link = document.createElement('a');
    link.href = svgDataUrl;
    link.download = FILE_NAME;
    link.click();
  };

  return (
    <div className="App">
        <Typography color="#404040" variant="h2">Identicon Generator</Typography>

        <Box sx={{
            display: 'flex',
            justifyContent:'center',
            "@media screen and (max-width:768px)": {
              flexDirection: 'column',
          },
        }}>

          <Stack sx={{alignItems: 'center', padding:'12px'}} direction={'column'} mb={2} spacing={2}>
            <Favicon svg={svg}/>
              <ChangePattern handleChange={handleChange}/>
              <Tooltip title="DownLoad SVG" placement="top" arrow>
                <Button variant='outlined' onClick={() => downloadSvg()}>DownLoad</Button>
              </Tooltip>
          </Stack>

          <Box sx={{padding:'12px'}}>
            <Stack sx={{justifyContent:'center', alignItems:'center'}} direction={'row'} spacing={2}>
                <Division division={division} handleDivision={handleDivision}/>
                <Shape handleShape={handleShape}/>
                <ColorPick color={color} handleColor={(e) => {setColor(e.target.value)}}/>

                {/* <Tooltip className='' title="Copy to Clipboard" placement="top" arrow>
                  <Button variant='outlined' onClick={() => copyToClipboard()}>Copy</Button>
                </Tooltip> */}
            </Stack>
          </Box>

        </Box>
    </div>
  );
}

export default App;
