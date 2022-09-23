import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Error from '../pages/404/Error'

function MyRouter() {
 <BrowserRouter>
  <Routes>
   <Route exact path="/" element={<Home />} />
   <Route path="*" element={<Error />} />
  </Routes>
 </BrowserRouter>
}

export default MyRouter
