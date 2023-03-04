import {Routes, Route} from 'react-router-dom';
import { Header } from './components/layouts/HeaderHome/Header';
import { Home } from './components/pages/HOME';
import { UseState } from './components/pages/UseState';
import { UseEffect } from './components/pages/UseEffect';
import { ChangeColor } from './components/pages/ChangeColor';
import { Tweets } from './components/pages/Tweets';
import './App.css';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="/usestate" element={<UseState />}/>
      <Route  path="/useeffect" element={<UseEffect />}/>
      <Route  path="/changecolor" element={<ChangeColor />}/>
      <Route  path="/tweets" element={<Tweets />}/>
    </Routes>
    </>
  );
}

export default App;
