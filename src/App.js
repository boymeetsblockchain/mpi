import 'typeface-poppins';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Meet from './pages/Meet'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/meetmpiunlimited' element={<Meet/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App