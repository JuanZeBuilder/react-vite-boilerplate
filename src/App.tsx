// App.tsx

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
