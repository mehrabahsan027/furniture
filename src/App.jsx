import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  


  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.getElementById('html').classList.add('dark');
    } else {
      document.getElementById('html').classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <>
      <Navbar darkMode={darkMode} onDark={setDarkMode}/>

      <main className="min-h-screen">
        <Outlet />
      </main>

     <Footer/>
    </>
  );
}

export default App;
