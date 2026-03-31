
import '../src/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout/MainLayout';

import HomePage from './Pages/Home'
import LoginPage from './Pages/Login'
import RegisterPage from './Pages/Register'
import ProductsPage from './Pages/Products'
import SingleProduto from './Pages/SingleProduto'


function App() {
  
  return (
    <Router>
      <Routes>

        {/* Rotas com layout */}
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/single' element={<SingleProduto />} />
        </Route>

        {/* Rotas sem layout */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

      </Routes>
    </Router>
  );
}

export default App
