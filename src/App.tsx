import React from 'react';
import logo from './logo.svg';
import './App.css';
import Division from './components/Division';
import Result from './components/Result';
import Svg from './components/Svg';
import {useState} from 'react';
import {GetDrawSvg, IDrawableSvg, Rect} from './Svg';
import Generate from './Pattern';

function App() {
  let pattern:boolean[][];
  let shape:IDrawableSvg  = new Rect();
  const [svg, setSvg] = useState<string>("");

  const [division, setDivision] = useState<number>(5);

  const handleDivision = (division:number) => {
    setDivision(division);
    pattern = Generate(division)
    shape.setSize(division)

    createFavicon();
  };

  const createFavicon = () => {
    // console.log(shape);
    const ret = GetDrawSvg(pattern, shape);
    console.log(ret);
    setSvg(ret.outerHTML)
    // fs.writeFile('output.svg', ret, (err) => {
    //     if (err) throw err;
    //     console.log('SVG has been saved!');
    //  });
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Identicon</h1>

        {/* {svg} */}
        <Svg svg={svg}/>
        <Division handleDivision={handleDivision}/>

        <Result division={division} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
