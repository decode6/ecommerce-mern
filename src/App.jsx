
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory category="mens"/>}/>
      <Route path='/womens' element={<ShopCategory category="women"/>}/>
      <Route path='/kids' element={<ShopCategory category="kid"/>}/>
      <Route path='/product' element={<ShopCategory category="kid"/>}/>
      <Route path='/kids' element={<ShopCategory category="kid"/>}/>
      <Route path='/kids' element={<ShopCategory category="kid"/>}/>
      
      </Routes>
      
      </BrowserRouter>
    
    </>
  )
}

export default App
