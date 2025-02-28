import React, { useContext, useState } from 'react';
import { cn } from '../utils';
import { LocalStorageContext } from '../context/LocalStorageContext';
import { motion } from 'motion/react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMdArrowDropup } from 'react-icons/io';
export default function Main({ children }) {
  const { invoices } = useContext(LocalStorageContext);
  const [dropdownFilter, setDropdownFilter] = useState(false);

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

  return (
    <main className="relative bg-secondary-light dark:bg-neutral-darkest  px-6 md:px-12 lg:px-44 pt-5">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-2xl dark:text-white tracking-[-0.75px] font-bold">
            Invoices
          </span>
          <p className="text-sm tracking-[-0.1px] font-medium text-secondary">
            {invoices.length} invoices
          </p>
        </div>
        <div className="flex gap-2">
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
              className="bg-white dark:bg-primary-darker w-[192px] absolute -right-[100%] p-8 rounded-[8px]"
              variants={variantsDropdown}
              initial="closed"
              animate={dropdownFilter ? 'open' : 'closed'}>
              <ul className="listDropdown">
                <li className="flex items-center gap-2">
                  <input type="checkbox" />
                  <label className="text-[15px] font-bold dark:text-white">
                    Draft
                  </label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" />
                  <label className="text-[15px] font-bold dark:text-white">
                    Pending
                  </label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" />
                  <label className="text-[15px] font-bold dark:text-white">
                    Paid
                  </label>
                </li>
              </ul>
            </motion.div>
          </motion.div>
          <div>btn add invoce</div>
        </div>
      </div>
      {children}
    </main>
  );
}
