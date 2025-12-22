
import '../src/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/Home'
import LoginPage from './Pages/Login'
import RegisterPage from './Pages/Register'
import ProductsPage from './Pages/Products'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/products' element={<ProductsPage/>} />
      </Routes>
    </Router>
  )
}

export default App
