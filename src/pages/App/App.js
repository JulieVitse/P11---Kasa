import './App.scss'
import Header from '../../layouts/Header/Header'
import Home from '../Homepage/Homepage'
import Footer from '../../layouts/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Footer />
    </BrowserRouter>
  )
}

export default App
