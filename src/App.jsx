import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (darkMode) {
      document.getElementById('html').classList.add('dark');
    } else {
      document.getElementById('html').classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} onDark={setDarkMode} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.8 }}
            transition={{ 
              duration: 0.2,
              ease: "easeInOut"
            }}
          >
            <Outlet context={{ searchQuery, setSearchQuery }} />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer/>
    </>
  );
}

export default App;
