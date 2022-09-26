import './App.scss'
import Layout from '../../layouts/Layout/Layout'
import Home from '../Homepage/Homepage'
import About from '../About/About'
import Logement from '../Logement/Logement'
import Error from '../Error/Error'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

let logements = require('../../datas/logements.json')

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="logement/:id" element={<Logement logements={logements} />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
