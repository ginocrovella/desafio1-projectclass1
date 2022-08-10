import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../components/Home/Home';
import NavBar from '../../components/NavBar/NavBar';
import NotFound from '../../components/NotFound';
import ItemListContainer from '../../containers/ItemListContainers';
import Cart from '../../containers/ItemListContainers/Cart/cart';
import ItemDetailContainer from '../../containers/ItemListContainers/ItemDetailContainer';

const MainNavigator = () => {
  return (
    <BrowserRouter>
        <div className='body'>
          <div className="titulo">
            <h1>MUEBLES DISEÑO CÚBICO</h1>
          </div>
      <NavBar />
      
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      </div>
      </BrowserRouter>
  )
}

export default MainNavigator;