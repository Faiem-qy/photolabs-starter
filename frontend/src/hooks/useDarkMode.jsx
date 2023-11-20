import React, { useState } from "react";

const useDarkMode = () => {
 const [mode, setMode] = useState("light") 

 const colors = {
  dark:{
    background: "#242424",
    color: "#F5F5F5"
  },
  light:{
    background: "#F5F5F5",
    color: "#242424"
  }
 }

const changeColors = (newMode) => {
  document.documentElement.style.setProperty(
    "--primary-background",
    colors[newMode].background
  );
  document.documentElement.style.setProperty(
    "--primary-text",
    colors[newMode].color
  );
};

 const toggleMode = () => {
  const newMode = mode === "dark" ? "light" : "dark"
  changeColors(newMode)
  setMode(newMode)
 }
 
  return {toggleMode, mode};
};

export default useDarkMode;