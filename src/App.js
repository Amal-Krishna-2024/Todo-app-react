import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './component/Add Todo';
import Search from './component/Search Todo';
import View from './component/View Todo';

function App() {
  return (
   < BrowserRouter>
   
   < Routes> 
   
   < Route path="/" element={<Add Todo/>}/>
   < Route path="/search" element={<Search Todo/>}/>
   < Route path="/view" element={<View Todo/>}/>

   
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
