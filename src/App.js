import React from "react";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/register" element={<SignUp/>}/>
      </Routes>
    </div>
  );
};

export default App;
