import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeApp from './homeApp';
import Login from './login';
import Info from "./info"




function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomeApp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/info' element={<Info />} />
        </Routes>
    </>
  );
}

export default App;
