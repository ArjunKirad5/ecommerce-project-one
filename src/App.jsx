import './App.css'
import About from './components/About'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Cart from './components/Cart'
import Contact from './components/Contact'
import Home from './components/Home'
import Products from './components/Products'
import Singleproduct from './components/Singleproduct'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Errorpage'

function App() {

  return (
    <>
    <Router>
      <Header/>
    <Routes>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='*' element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/singleproduct/:id' element={<Singleproduct/>}></Route>
      <Route path='/error' element={<Error/>}></Route>
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App
