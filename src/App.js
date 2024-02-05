import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <BrowserRouter>
    <Header/>
    <br/>
    <Navbar/>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
