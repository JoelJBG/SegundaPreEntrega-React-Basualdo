import { useState } from 'react'
import './App.css'

import NavBar from './components/Navbar/Navbar.jsx';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';

function App() {

  return (
    <>
      <NavBar />
      <ItemListConteiner greeting="Bienvenidos"/>
    </>
  )
}

export default App
