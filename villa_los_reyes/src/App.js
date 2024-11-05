import './App.css';
import React, { useState } from 'react';
//import { ArrowDropDownScreen } from './components/menu/ArrowDropDown';
import { MenuButton } from './components/menu/MenuButon';
function App() {
  const [selected, setSelected] = useState("default");

  const handleClick = () => {
    setSelected(selected === "default" ? "select" : "default");
  };

  return (
    <div className="App">
      <MenuButton className = "button1" property1={'default'}/>
    </div>
  );
}

export default App;
