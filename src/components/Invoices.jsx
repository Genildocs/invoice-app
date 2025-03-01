import React, { useContext } from 'react';
import { motion } from 'motion/react';
import { LocalStorageContext } from '../context/LocalStorageContext';
import { cn } from '../utils';
import { Link } from 'react-router';
export default function Invoices() {
  const { filterInvoices } = useContext(LocalStorageContext);

  return (
    <section className="mt-5">
      <ul className="flex flex-col items-center gap-2">
        {filterInvoices.map((invoice, index) => (
          <Link to={`view-invoice/${invoice['id'].toLowerCase()}`} key={index}>
            <motion.li
              className={cn(
                'bg-white dark:bg-primary-dark dark:text-white w-[20.5rem] p-5 rounded-lg flex justify-between border-[2px] border-solid'
              )}
              style={{ borderColor: 'rgb(255,255,255,0)' }}
              whileHover={{ borderColor: 'rgb(124,93,250,0.9)' }}>
              <div className="flex flex-col">
                <span className="font-bold text-[15px] tracking-[-0.25px]">
                  #{invoice.id}
                </span>
                <span className="text-sm text-secondary tracking-[-0.1px] font-medium text-end mt-5 mb-2">
                  Due 28 sep 2020
                </span>
                <span className="font-bold text-[15px] tracking-[-0.25px]">
                  £ {invoice.total}
                </span>
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-sm text-secondary tracking-[-0.1px] font-medium text-end">
                  {invoice.clientName}
                </p>
                <div
                  className={cn(
                    'relative w-24 h-10 bg-green-100 text-green-status  flex items-center justify-center rounded-lg ',
                    invoice.status === 'pending' &&
                      'bg-orange-100 text-orange-500',
                    invoice.status === 'draft' &&
                      'bg-secondary-light text-secondary-dark'
                  )}>
                  <div
                    className={cn(
                      'h-2 w-2 rounded-full bg-green-status mr-2 ',
                      invoice.status === 'pending' && 'bg-orange-500',
                      invoice.status === 'draft' && 'bg-secondary-dark'
                    )}
                  />
                  <span className="font-bold text-[15px] tracking-[-0.25px]">
                    {invoice.status}
                  </span>
                </div>
              </div>
            </motion.li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
