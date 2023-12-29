import React from 'react';
import ReactDOM from 'react-dom/client';
import Intro from './components/intro/Intro';
import About from './components/about/About';

import IdealsList from './components/idealsList/IdealsList';
import Contacts from './components/contacts/Contacts';
import Toggle from './components/toggle/Toggle';
import { useContext } from "react";
import { ThemeContext } from "./context";



export default function App(){
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return(
    <div  style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}>
      
      
        <Toggle/>
        <Intro/>
        <About/>
        <IdealsList/>
        <Contacts/>
      
      
    </div>
    
  )
}