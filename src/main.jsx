import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OnsPageProducts from './assets/Components/OnsPageProducts/OnsPageProducts.jsx'
import FilterBrands from './Pages/Home/FilterBrands/FilterBrands.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/onspageproduct/:ProductID" element={<OnsPageProducts/>} />
    <Route path="/productsBrand/:BrandName" element={<FilterBrands/>} />
  </Routes>
</BrowserRouter>
)
