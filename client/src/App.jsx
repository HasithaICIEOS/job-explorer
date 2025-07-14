import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import TaskerPage from "./pages/TaskerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasker" element={<TaskerPage />} />
      </Routes>
      {/* <Navbar /> */}
    </BrowserRouter>
  );
}

export default App;
