import 'typeface-poppins';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Meet from './pages/Meet'
import Founder from './pages/Founder'
import Intro from './pages/Intro';
import MpiBook from './pages/MpiBook';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/meetmpiunlimited' element={<Meet/>}/>
        <Route  path='/meetthefounder' element={<Founder/>}/>
        <Route  path='/introtompi' element={<Intro/>}/>
        <Route  path='/mpibook' element={<MpiBook/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App