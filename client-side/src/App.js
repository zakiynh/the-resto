import logo from './logo.svg';
import './App.css';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import CardItem from './component/CardItem';
import NavBar from './component/NavBar';
import DashboardPage from './views/DashboardPage';
import MenuPage from './views/MenuPage';
import DetailPage from './views/DetailPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
        crossOrigin="anonymous"
      />
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/menus' element={<MenuPage />} />
        <Route path='/details/:id' element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
