import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./pages/Form";
import { InvoiceGenerate } from "./pages/InvoiceGenerate";
import { OtpGenerate } from "./pages/OtpGenerate";
import { Task } from "./pages/Task"
import { CountriesInfo} from "./pages/CountriesInfo"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/invoice" element={<InvoiceGenerate />} />
        <Route path="/otp" element={<OtpGenerate />} />
        <Route path="/task" element={<Task />} />
        <Route path="/countries" element={<CountriesInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
