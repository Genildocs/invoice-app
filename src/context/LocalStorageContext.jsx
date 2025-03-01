import { useState, createContext, Children, useEffect } from 'react';
import data from '../../public/data.json';
// cria o contexto
const LocalStorageContext = createContext();

// cria o provedor do contexto
const LocalStorageProvider = ({ children }) => {
  // Estado global que será armazenado no LocalStorage
  const [invoices, setInvoices] = useState(() => {
    // Verifica se já existem faturas no LocalStorage
    const storedInvoices = localStorage.getItem('invoices');
    return storedInvoices ? JSON.parse(storedInvoices) : [...data];
  });

  //Para filtragem sem alteração do original salvo no localStorage
  const [filterInvoices, setFilterInvoices] = useState(invoices);

  // Sempre que 'invoices' mudar, salvar no LocalStorage
  useEffect(() => {
    localStorage.setItem('invoices', JSON.stringify(invoices));
  }, [invoices]);

  return (
    <LocalStorageContext.Provider
      value={{ invoices, setInvoices, filterInvoices, setFilterInvoices }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

export { LocalStorageContext, LocalStorageProvider };
