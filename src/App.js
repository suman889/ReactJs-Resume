import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <Navbar />
      <Home/> */}

    </div>
  );
}

export default App;
