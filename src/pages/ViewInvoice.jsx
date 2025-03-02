import React, { useContext, useEffect, useState } from 'react';
import { cn } from '../utils';
import { Link, useParams } from 'react-router';
import { AiOutlineCaretLeft } from 'react-icons/ai';
import { LocalStorageContext } from '../context/LocalStorageContext';

export default function ViewInvoice() {
  const { filterInvoices } = useContext(LocalStorageContext);
  const [viewInvoice, setViewInvoice] = useState({});
  let params = useParams();

  useEffect(() => {
    const findInvoice = filterInvoices.find(
      (item) => item.id === params.id.toUpperCase()
    );

    setViewInvoice(findInvoice || {});
  }, [params.id, filterInvoices]);

  return (
    <section className="px-6 md:px-12 lg:px-44 py-5 bg-secondary-light dark:bg-neutral-darkest min-h-full">
      <div>
        <Link to="/" className="flex items-center">
          <AiOutlineCaretLeft className=" fill-primary" />
          <span className="text-[15px] dark:text-white font-bold tracking-[-0.25px]">
            Go back
          </span>
        </Link>
      </div>
      <div className="flex flex-col items-center mt-5">
        <div className="bg-white dark:bg-primary-dark dark:text-white w-[20.5rem] p-5 rounded-lg flex items-center justify-between">
          <span className="text-sm text-secondary tracking-[-0.1px] font-medium text-end">
            Status
          </span>
          <div
            className={cn(
              'relative w-24 h-10 bg-green-100 text-green-status  flex items-center justify-center rounded-lg ',
              viewInvoice.status === 'pending' &&
                'bg-orange-100 text-orange-500',
              viewInvoice.status === 'draft' &&
                'bg-secondary-light text-secondary-dark'
            )}>
            <div
              className={cn(
                'h-2 w-2 rounded-full bg-green-status mr-2 ',
                viewInvoice.status === 'pending' && 'bg-orange-500',
                viewInvoice.status === 'draft' && 'bg-secondary-dark'
              )}
            />
            <p className="headingS">{viewInvoice.status}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-primary-dark p-5 w-[20.5rem] rounded-lg mt-3">
          <span className="headingS">#{viewInvoice.id}</span>
          <p className="text-field">{viewInvoice.description}</p>
          {viewInvoice.clientAddress !== undefined ? (
            <div className="my-5">
              <p className="text-field">{viewInvoice.clientAddress.street}</p>
              <p className="text-field">{viewInvoice.clientAddress.city}</p>
              <p className="text-field">{viewInvoice.clientAddress.postCode}</p>
              <p className="text-field">{viewInvoice.clientAddress.country}</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
