import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Adjust the import path as needed
import ProtectedRoute from './components/ProtectedRoute'; // Adjust the import path as needed
import HomePage from './components/HomePage'; // Adjust the path as needed
import LoginPage from './components/user/LoginPage'; // Adjust the path as needed
import RegistrationPage from './components/user/RegistrationPage'; // Adjust the path as needed
import InvoicePage from './components/invoice/InvoicePage'; // Adjust the path as needed
import InvoiceCreatePage from './components/invoice/CreateInvoicePage';
import InvoiceHomePage from './components/invoice/ShowPage'; // Adjust the path as needed
import InvoiceUpdatePage from './components/invoice/EditPage';
import JobPage from './components/job/jobPage'; // Adjust the path as needed
import JobShowPage from './components/job/JobShowPage';
import JobCreatePage from './components/job/CreateJobPage';
import JobUpdatePage from './components/job/UpdateJobForm';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/invoice" element={<ProtectedRoute><InvoicePage /></ProtectedRoute>} />
          <Route path="/invoice/create" element={<ProtectedRoute><InvoiceCreatePage /></ProtectedRoute>} />
          <Route path="invoice/:id" element={<ProtectedRoute><InvoiceHomePage /></ProtectedRoute>} />
          <Route path="invoice/:id/update" element={<ProtectedRoute><InvoiceUpdatePage /></ProtectedRoute>} />
          <Route path="/job" element={<ProtectedRoute><JobPage /></ProtectedRoute>} />
          <Route path="job/:id" element={<ProtectedRoute><JobShowPage /></ProtectedRoute>} />
          <Route path='job/create' element={<ProtectedRoute><JobCreatePage /></ProtectedRoute>} />
          <Route path='/job/:id/update' element={<ProtectedRoute><JobUpdatePage /></ProtectedRoute>} />
          {/* Update other routes similarly */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
