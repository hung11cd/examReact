import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/global.css';
import './styles/responsive.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import Layout from './layout/Layout';
import NoPage from './pages/NoPage';
import BlogPage from './pages/BlogPage';
import TechPage from './pages/TechPage';
import SportPage from './pages/SportPage';
import FashionPage from './pages/FashionPage';
import CategoryPage from './pages/CategoryPage';
function App() {
  return (
    <>
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout />} >
            <Route index element={<HomePage/>} />
            <Route path='/product' element={<ProductPage />} />
            <Route path='/blog' element={<BlogPage/>} />
            <Route path='/tech' element={<TechPage/>} />
            <Route path='/sport' element={<SportPage/>} />
            <Route path='/fashion' element={<FashionPage/>} />
            <Route path='/category' element={<CategoryPage/>} />
            <Route path='/login' element={<LoginPage />} />
        </Route>
        <Route path='*' element={<NoPage />} />
    </Routes>
   
   </BrowserRouter>
   </>
  );
}

export default App;
