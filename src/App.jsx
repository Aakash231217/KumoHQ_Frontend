import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Home/>
      <Footer/>
      {/* other components */}
    </Router>
  );
}

export default App;