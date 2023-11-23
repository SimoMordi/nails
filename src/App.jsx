
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './pages/Contact/contact'
import Gallery from './pages/Gallery/Gallery'
import About from './pages/About/About'
import Footer from './components/Footer/footer'
import Navbar from './components/Navbar/Navbar'
import ServicesSection from './components/mainServices/mainServices'

function App() {

  return (
    <div>

      {/* <Navbar /> */}
      {/* <Contact/>  */}
     <ServicesSection />
      {/* <Gallery /> */}

      {/* <About/> */}
  
      {/* <Footer /> */}

        {/* <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes> */}
    </div>
  )
}

export default App
