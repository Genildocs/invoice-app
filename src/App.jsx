import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { ThemeProvider } from './context/ThemeContext';
import { LocalStorageProvider } from './context/LocalStorageContext';
import Header from './components/Header';
import Main from './components/Main';
import EditInvoice from './pages/EditInvoice';
import ViewInvoice from './pages/ViewInvoice';
import CreateInvoice from './pages/CreateInvoice';
export default function App() {
  return (
    <LocalStorageProvider>
      <ThemeProvider>
        <Router basename="/">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="view-invoice/:id" element={<ViewInvoice />} />
            <Route path="new-invoice" element={<CreateInvoice />} />
            <Route path="edit-invoice/:id" element={<EditInvoice />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </LocalStorageProvider>
  );
}
