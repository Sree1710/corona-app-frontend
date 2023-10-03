import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDetails from './Components/AddDetails';
import SearchDetails from './Components/SearchDetails';
import ViewDetails from './Components/ViewDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<AddDetails/>}/>
        <Route path='/searchc' exact element={<SearchDetails/>}/>
        <Route path='/viewc' exact element={<ViewDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
