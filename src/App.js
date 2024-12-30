import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import SignIn from './components/SignIn';
import ForgetPassword from './components/Forget';
import ResetPassword from './components/Reset';
import EmailVerification from './components/Email';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FindJobs from './components/FindJobs';
import JobDetails from './components/JobDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/find-job" element={<FindJobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

