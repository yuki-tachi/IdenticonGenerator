import logo from './logo.svg';
import {useState, useEffect} from 'react';
import './App.css';

// components
import Division from './components/Division';
import Result from './components/Result';
import Svg from './components/Svg';
import Shape from './components/Shape';
import ChangePattern from './components/ChangePattern';
import ColorPick from './components/ColorPick';


import {GetDrawSvg, IDrawableSvg, Rect, Circle} from './Svg';
import Generate from './Pattern';

function App() {
  // let currentShape:IDrawableSvg = new Rect();
  const initRect = new Rect();
  initRect.setSize(5)
  const [shape, setShape] = useState<IDrawableSvg>(initRect);
  const [svg, setSvg] = useState<string>("");
  const [division, setDivision] = useState<number>(5);
  const [pattern, setPattern] = useState<boolean[][]>(Generate(5));
  const [color, setColor] = useState('#B30F3A');

  // 初回一回のみ呼び出すタイミングで実行される、初期表示用
  useEffect(() => {
    shape.setSize(division);
    setSvg(GetDrawSvg(pattern, shape));
  },[]);

  useEffect(() => {
    shape.fill = color;
    shape.setSize(division);

    setSvg(GetDrawSvg(pattern, shape));
  },[division, pattern, shape]);

  useEffect(() => {
    shape.fill = color;
    setSvg(GetDrawSvg(pattern, shape));
  },[color]);

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Identicon Generator</h1>

        <Svg svg={svg}/>
        <Division division={division} handleDivision={handleDivision}/>
        <Shape handleShape={handleShape}/>
        <ChangePattern handleChange={handleChange}/>
        {/* <Result division={division} /> */}
        <ColorPick color={color} handleColor={(e) => {setColor(e.target.value)}}/>

        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
      </header>
    </div>
  );
}

export default App;
