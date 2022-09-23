import './App.scss'
import Header from '../../layouts/Header/Header'
import Footer from '../../layouts/Footer/Footer'
import Home from '../Homepage/Homepage'
import About from '../About/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
