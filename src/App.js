import 'typeface-poppins';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/home/Footer';
import Home from './pages/Home';
import Meet from './pages/Meet'
import Founders from './pages/Founders'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Intro from './pages/intro';
function App() {
  return (
    // <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/meetmpiunlimited' element={<Meet />} />
          <Route path='/intro' element={<Intro />} />
        <Route path='/founders' element={<Founders />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    // </div>
  )
}

export default App