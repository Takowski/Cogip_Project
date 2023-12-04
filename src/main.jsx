import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import Profile from './profile.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>
  </React.StrictMode>
);