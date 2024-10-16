import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { Json } from './MileStoneProject/jsondata';
import 'bootstrap/dist/css/bootstrap.css'
import { Detail } from './MileStoneProject/detail';

function App() {
  return (
    <BrowserRouter>
     <Routes>
    <Route path="/" element={<Json/>}/>
    <Route path="/product/:id" element={<Detail/>}/>
     </Routes>
    </BrowserRouter>

  );
}

export default App;
