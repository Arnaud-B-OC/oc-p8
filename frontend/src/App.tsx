import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Project from './pages/project/Project';
import Error404 from './pages/404/Error404';
import Legals from './pages/legals/Legals';
import './global.scss';

function App() {
    return <>
        <Header/>
        
        <Routes>
            <Route path='*' element={<Error404/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/project/:id' element={<Project/>}/>
            <Route path='/legals' element={<Legals/>}/>
        </Routes>
        
        <Footer/>
    </>
}

export default App;
