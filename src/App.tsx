import {useState, useEffect} from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

// components
import Division from './components/Division';
import Svg from './components/Svg';
import Shape from './components/Shape';
import ChangePattern from './components/ChangePattern';
import ColorPick from './components/ColorPick';

import {GetDrawSvg, IDrawableSvg, Rect, Circle} from './Svg';
import Generate from './Pattern';

const TITLE = "Identicon Generator";
const DEFAULT_DIVISION: number = 5;

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
  },[]);

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
    link.download = 'favicon.svg';
    link.click();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Identicon Generator</h1>
        <Svg svg={svg}/>
        <Box sx={{ flexGrow: 1 }}>
          <Stack direction={'row'} spacing={1}>
              <Division division={division} handleDivision={handleDivision}/>
              <Shape handleShape={handleShape}/>
              <ColorPick color={color} handleColor={(e) => {setColor(e.target.value)}}/>
              <ChangePattern handleChange={handleChange}/>
              {/* <Tooltip className='' title="Copy to Clipboard" placement="top" arrow>
                <Button variant='outlined' onClick={() => copyToClipboard()}>Copy</Button>
              </Tooltip> */}
              <Tooltip title="DownLoad SVG" placement="top" arrow>
                <Button variant='outlined' onClick={() => downloadSvg()}>DownLoad</Button>
              </Tooltip>
          </Stack>
        </Box>
      </header>
    </div>
  );
}

export default App;
