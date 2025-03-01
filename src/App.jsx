import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { ThemeProvider } from './context/ThemeContext';
import { LocalStorageProvider } from './context/LocalStorageContext';
import Header from './components/Header';
import Main from './components/Main';
import InfoNoInvoice from './components/InfoNoInvoice';
import Invoices from './components/Invoices';
import ViewInvoice from './pages/ViewInvoice';
export default function App() {
  return (
    <LocalStorageProvider>
      <ThemeProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="view" element={<ViewInvoice />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </LocalStorageProvider>
  );
}
