import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './component/header';
import { Register } from './component/register';
import { Login } from './component/login';
import { List } from './component/list';
import { Book } from './component/book';
import { Userist, USerist } from './component/userLsit';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/register' index  element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/list' element={<List/>} />
        <Route path='/' element={<Book/>} />
        <Route path='/user' element={<Userist/>} /> 
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
