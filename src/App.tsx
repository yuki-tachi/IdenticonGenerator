import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Division from './components/Division';
import Result from './components/Result';
import Svg from './components/Svg';
import Shape from './components/Shape';
import ChangePattern from './components/ChangePattern';
import {useState} from 'react';
import {GetDrawSvg, IDrawableSvg, Rect, Circle} from './Svg';
import Generate from './Pattern';

function App() {
  // let currentShape:IDrawableSvg = new Rect();
  const initRect = new Rect();
  initRect.setSize(5)
  const [shape, setShape] = useState<IDrawableSvg>(initRect);
  const [svg, setSvg] = useState<string>("");
  const [division, setDivision] = useState<number>(5);
  const [pattern, setPattern] = useState<boolean[][]>([[false]]);

  useEffect(() => {
    console.log("division or pattern");

    shape.setSize(division);
    setSvg(GetDrawSvg(pattern, shape));
  },[division, pattern]);

  useEffect(() => {
    console.log("shape："+division);

    shape.setSize(division);
    setSvg(GetDrawSvg(pattern, shape));
  },[shape]);

  const handleDivision = (division: number) => {
    setDivision(division);
    setPattern(Generate(division));
  };

  const handleShape = (shapeType:string) => {
    // console.log(shapeType)
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
    console.log("handleChange");
    setPattern(Generate(division));
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Identicon Generator</h1>

        <Svg svg={svg}/>
        <Division handleDivision={handleDivision}/>
        <Shape handleShape={handleShape}/>
        <ChangePattern handleChange={handleChange}/>
        <Result division={division} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
