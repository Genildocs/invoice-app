import React, { useContext } from 'react';
import { motion } from 'motion/react';
import { LocalStorageContext } from '../context/LocalStorageContext';
import { cn } from '../utils';
export default function Invoices() {
  const { invoices } = useContext(LocalStorageContext);

  return (
    <section className="mt-5">
      <ul className="flex flex-col gap-2">
        {invoices.map((invoice, index) => (
          <li
            className={`bg-white w-[20.5rem] p-5 rounded-lg flex justify-between `}
            key={index}>
            <div className="flex flex-col">
              <span className="font-bold text-[15px] tracking-[-0.25px]">
                #RT3080
              </span>
              <span className="text-sm text-secondary tracking-[-0.1px] font-medium text-end mt-5 mb-2">
                Due 28 sep 2020
              </span>
              <span className="font-bold text-[15px] tracking-[-0.25px]">
                £ 1,800.90
              </span>
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-sm text-secondary tracking-[-0.1px] font-medium text-end">
                Jensen Hang
              </p>
              <div
                className={cn(
                  'relative w-24 h-10 bg-green-50 text-green-status  flex items-center justify-center rounded-lg '
                )}>
                <div className="h-2 w-2 rounded-full bg-green-status mr-2 " />
                <span className="font-bold text-[15px] tracking-[-0.25px]">
                  {invoice.status}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
