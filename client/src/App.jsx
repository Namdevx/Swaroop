import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import ProductDetails from "./ProductDetails";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
