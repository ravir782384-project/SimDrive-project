import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cart from './Projects/Cart';
import Nav from './Projects/Nav';
import Myfooter from './Projects/Myfooter';
// Pages
import Home from './Projects/Home';
import About from './Projects/About';
import Contact from './Projects/Contact';
import Gears from './Projects/Products/Gears';

// Products
import All from './Projects/Products/All';
import Wheels from './Projects/Products/Wheels';
import Motors from './Projects/Products/Motors';
import Pedals from './Projects/Products/Pedals';
import Shifters from './Projects/Products/Shifters';
import Cockpits from './Projects/Products/Cockpits';
import Accessories from './Projects/Products/Accessories';

function App() {
    const [cartitems, setcartitems] = useState([]);

  const addtocart = (product) => {
    setcartitems([...cartitems, product]);
  };
  return (
    <BrowserRouter>
      <Nav  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cartitems={cartitems} />} />

         {/*nestad route */}

        <Route path="/gears" element={<Gears/>}>
          <Route index element={<All addtocart={addtocart}/>} />
          <Route path="wheels" element={<Wheels addtocart={addtocart}/>} />
          <Route path="motors" element={<Motors addtocart={addtocart}/>} />
          <Route path="pedals" element={<Pedals addtocart={addtocart}/>} />
          <Route path="shifters" element={<Shifters addtocart={addtocart}/>} />
          <Route path="cockpits" element={<Cockpits addtocart={addtocart}/>} />
          <Route path="accessories" element={<Accessories addtocart={addtocart}/>} />
        </Route> 
        </Routes>
      <Myfooter />
    </BrowserRouter>
  );
}

export default App;