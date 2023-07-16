import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Generate from './Pattern';
import {GetDrawSvg, Rect} from './Svg';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// const t = Generate(7);
// console.log(t);
// const rect = new Rect();
// rect.setSize(7);
// console.log(GetDrawSvg(t, rect))