import React, { useState } from 'react';
import NavBar from './Common/Navbar/Navbar'
import Footer from './Common/Footer/Footer';
import Utility from './Common/Utility/Utility';
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import MyAccount from './components/MyAccount/MyAccount';
import Cart from './components/Cart/Cart';
import Search from './Common/Search/Search';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  //  This is state for opening modal and closing modal  when we click on the search button
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((showModal) => !showModal)
  }


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/myaccount' element={<MyAccount />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Home />} />
      </Routes>
      {showModal && <Search showModalHandler={showModalHandler} />}
      <Utility showModalHandler={showModalHandler} />
      <Footer />
    </Router>
  );
}

export default App;
