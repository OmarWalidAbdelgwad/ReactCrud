import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/navbar";
import Admin from "./pages/Admin";

const App = () => {
  // Get users from localStorage
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");

    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  // Save users to localStorage whenever users changes
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/contact"
          element={
            <Contact
              users={users}
              setUsers={setUsers}
            />
          }
        />

        <Route
          path="/admin"
          element={
            <Admin
              users={users}
              setUsers={setUsers}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;