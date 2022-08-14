// parent components
import React from "react";
import MainLayouts from "./components/Layout/main.layout";
import Albums from "./components/Albums/main.albums";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <MainLayouts>
        <Router>
          <Routes>
            <Route path="/" element={<h1> HOME PAGE </h1>} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/post" element={<h1> POST </h1>} />
            <Route path="/*" element={<h1> 404 NOT FOUND </h1>} />
          </Routes>
        </Router>
      </MainLayouts>
    </>
  );
};

export default App;
