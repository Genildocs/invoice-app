import React, { useContext } from 'react';
import { LocalStorageContext } from '../context/LocalStorageContext';
import ImageNotify from '../../public/images/illustration-empty.svg';
export default function InfoNoInvoice() {
  const { invoices } = useContext(LocalStorageContext);
  const length = invoices.length === 0;

  return (
    <>
      {length && (
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <div>
            <img src={ImageNotify} alt="icon no invoice" className="w-48" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-bold text-2xl text-center tracking-[-0.75px] dark:text-white">
              There is nothing here
            </h2>
            <p className="text-center text-sm tracking-[-0.1px] text-secondary dark:text-white">
              Create on invoice by clicking the <strong>New</strong> button and
              get started
            </p>
          </div>
        </div>
      )}
    </>
  );
}
