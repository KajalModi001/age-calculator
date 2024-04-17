import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Agecalculator from './Pages/Agecalculator';

function App() {
  return (
   <>
   <BrowserRouter>
   
   <Routes>
    <Route path='' element={<Agecalculator/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
