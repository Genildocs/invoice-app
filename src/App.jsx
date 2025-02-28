import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LocalStorageProvider } from './context/LocalStorageContext';
import Header from './components/Header';
import Main from './components/Main';
import InfoNoInvoice from './components/InfoNoInvoice';
import Invoices from './components/Invoices';
export default function App() {
  return (
    <LocalStorageProvider>
      <ThemeProvider>
        <>
          <Header />
          <Main>
            <InfoNoInvoice />
            <Invoices />
          </Main>
        </>
      </ThemeProvider>
    </LocalStorageProvider>
  );
}
