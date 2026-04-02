// import './App.css'
// import { Toaster } from 'react-hot-toast';

// import Body from './components/Body'


// function App() {
 

//   return (
//     <>
//    <Body/>
//     <Toaster />
    
//     </>
//   )
// }

// export default App

import React from "react";
import Body from "./components/Body";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Body />
      <Toaster />
    </>
  );
}

export default App;
