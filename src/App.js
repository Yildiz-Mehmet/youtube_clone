import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

const App = () => (
  <Router>
    <Box sx={{ backgroundColor: "#000" }}>
      Navbar
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" />
      </Routes>
    </Box>
  </Router>
);

export default App;
