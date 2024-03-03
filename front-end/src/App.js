import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Adjust the import path as needed
import ProtectedRoute from './components/ProtectedRoute'; // Adjust the import path as needed
import HomePage from './components/HomePage'; // Adjust the path as needed
import LoginPage from './components/LoginPage'; // Adjust the path as needed
import RegistrationPage from './components/RegistrationPage'; // Adjust the path as needed
import InvoicePage from './components/InvoicePage'; // Adjust the path as needed
import InvoiceCreatePage from './components/CreateInvoicePage';

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
          {/* Update other routes similarly */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
