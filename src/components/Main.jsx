import React, { useContext, useEffect, useState, useRef } from 'react';
import { cn } from '../utils';
import { LocalStorageContext } from '../context/LocalStorageContext';
import { motion } from 'motion/react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMdArrowDropup } from 'react-icons/io';
import { IoAdd } from 'react-icons/io5';
import InfoNoInvoice from './InfoNoInvoice';
import Invoices from './Invoices';
import { Link } from 'react-router';
export default function Main() {
  const { invoices, filterInvoices, setFilterInvoices } =
    useContext(LocalStorageContext);
  const [dropdownFilter, setDropdownFilter] = useState(false);
  const dropdownRef = useRef(null);
  const [dropdownCheckBox, setDropdownCheckBox] = useState([
    { name: 'Paid', value: false },
    { name: 'Pending', value: false },
    { name: 'Draft', value: false },
  ]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownFilter(false);
      }
    }

    function handleKeyPress(event) {
      if (event.key === 'Escape') {
        setDropdownFilter(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleChange = (position) => {
    const checkBoxUpdate = dropdownCheckBox.map((item, index) =>
      index === position ? { ...item, value: !item.value } : item
    );
    setDropdownCheckBox(checkBoxUpdate);
  };

  const filterCheckBox = () => {
    const activeStatuses = dropdownCheckBox
      .filter((item) => item.value)
      .map((item) => item.name.toLowerCase());

    if (activeStatuses.length === 0) {
      setFilterInvoices(invoices); // Se nenhum checkbox estiver marcado, mostra todos
    } else {
      setFilterInvoices(
        invoices.filter((invoice) => activeStatuses.includes(invoice.status))
      );
    }
  };

  const variantsDropdown = {
    open: {
      opacity: 1,
      visibility: 'visible',
      y: 20,
      transition: { ease: 'easeOut', duration: 0.2 },
    },
    closed: {
      opacity: 0,
      visibility: 'hidden',
      y: 30,
    },
  };

  useEffect(() => {
    filterCheckBox();
  }, [dropdownCheckBox, invoices]);

  return (
    <main className="relative  min-h-full bg-secondary-light dark:bg-neutral-darkest  px-6 md:px-12 lg:px-44 py-5">
      <section>
        <div className="lg:flex flex-col items-center">
          <div
            className="flex items-center justify-between lg:w-[45rem]"
            ref={dropdownRef}>
            <div>
              <span className="text-2xl dark:text-white tracking-[-0.75px] font-bold">
                Invoices
              </span>
              <p className="text-sm tracking-[-0.1px] font-medium text-secondary">
                {filterInvoices.length} invoices
              </p>
            </div>
            <div className="flex items-center gap-2">
              <motion.div className="relative">
                <motion.button
                  className={cn(
                    'flex items-center gap-1 ',
                    dropdownFilter && 'hidden'
                  )}
                  onClick={() => setDropdownFilter(!dropdownFilter)}>
                  <p className="text-[14px] dark:text-white font-bold">
                    Filter{' '}
                    <span
                      className={cn(
                        'hidden md:inline-block md:tracking-[-0.25px] dark:text-white'
                      )}>
                      by status
                    </span>
                  </p>
                  <IoMdArrowDropdown className="fill-primary-light" />
                </motion.button>
                <motion.button
                  className={cn(
                    'hidden items-center gap-1 ',
                    dropdownFilter && 'flex'
                  )}
                  onClick={() => setDropdownFilter(!dropdownFilter)}>
                  <p className="text-[14px] dark:text-white font-bold">
                    Filter{' '}
                    <span
                      className={cn(
                        'hidden md:inline-block md:tracking-[-0.25px] dark:text-white'
                      )}>
                      by status
                    </span>
                  </p>
                  <IoMdArrowDropup className="fill-primary-light" />
                </motion.button>
                <motion.div
                  className="bg-white z-50 dark:bg-primary-darker w-[192px] absolute -right-[100%] p-8 rounded-[8px]"
                  variants={variantsDropdown}
                  initial="closed"
                  animate={dropdownFilter ? 'open' : 'closed'}>
                  <ul className="listDropdown">
                    {dropdownCheckBox.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="accent-primary"
                          name={item.name}
                          checked={item.value}
                          onChange={() => handleChange(index)}
                        />
                        <label className="text-[15px] font-bold dark:text-white">
                          {item.name}
                        </label>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
              <motion.button
                className=" w-20 h-11 rounded-[24px]"
                style={{ backgroundColor: 'rgb(124,93,250,0.9)' }}
                whileHover={{ backgroundColor: 'rgb(146,119,255,0.9)' }}>
                <Link
                  to="/new-invoice"
                  className="text-[15px] tracking-[-0.25px] font-bold flex items-center gap-2 p-1">
                  <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center">
                    <IoAdd />
                  </div>
                  <span className="dark:text-white">New</span>
                </Link>
              </motion.button>
            </div>
          </div>
        </div>
      </section>
      <InfoNoInvoice />
      <Invoices />
    </main>
  );
}
