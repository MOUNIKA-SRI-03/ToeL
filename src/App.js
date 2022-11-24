import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import SampleLogin from './components/sampleLogin';
import Home from './components/home'


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/sampleLogin' element={<SampleLogin/>} />
    </Routes>
    <Footer/>

    </BrowserRouter> 
  );
}

export default App;

