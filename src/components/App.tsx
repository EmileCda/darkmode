import { StrictMode, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Test from "./Test";
import Navbar from "./Navbar";
import { AppGlobalStyle, colorsDark, colorsLight } from "../styles/App.style";
import { ThemeProvider } from "styled-components";
import { DarkModeStore } from "../stores/DarkMode.store";
import { useStore } from "@nanostores/react";



export default function App() {

    // -----------------------------------------------------------------------
  const { isDark } = useStore(DarkModeStore);
  return (
    <StrictMode>
      <BrowserRouter>
      <ThemeProvider theme= {isDark ? colorsDark :colorsLight}>
      
        <AppGlobalStyle  />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
