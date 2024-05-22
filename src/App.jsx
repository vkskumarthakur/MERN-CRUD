import "./App.css";
import React from "react";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Forgot from "./pages/Forgot";

const NotFound = () => {
  return <h1 className="text-white">404 - Page Not Found</h1>;
};

function App() {
  return (
    <main className="min-h-screen bg-blue-950 flex items-center justify-center">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/forgotpassword" element={<Forgot />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<Navigate to="/404" />} />
          {/* Define the NotFound component route */}
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
