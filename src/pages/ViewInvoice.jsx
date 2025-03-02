import React, { useContext, useEffect, useState } from 'react';
import { cn } from '../utils';
import { motion } from 'motion/react';
import { Link, useParams } from 'react-router';
import { AiOutlineCaretLeft } from 'react-icons/ai';
import { LocalStorageContext } from '../context/LocalStorageContext';

export default function ViewInvoice() {
  const { filterInvoices } = useContext(LocalStorageContext);
  const [viewInvoice, setViewInvoice] = useState({});
  let params = useParams();

  useEffect(() => {
    let findInvoice = filterInvoices.find(
      (item) => item.id === params.id.toUpperCase()
    );

    findInvoice = {
      ...findInvoice,
      createdAt: new Date(findInvoice.createdAt).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC',
      }),
      paymentDue:
        'Due ' +
        new Date(findInvoice.paymentDue).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          timeZone: 'UTC',
        }),
    };
    setViewInvoice(findInvoice || {});
  }, [params.id, filterInvoices]);

  return (
    <section className="flex flex-col justify-between md:px-12 lg:px-44 pt-5 bg-secondary-light dark:bg-neutral-darkest min-h-full">
      <div className="px-6 ">
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
            {viewInvoice.senderAddress !== undefined ? (
              <div className="my-5">
                <p className="text-field">{viewInvoice.senderAddress.street}</p>
                <p className="text-field">{viewInvoice.senderAddress.city}</p>
                <p className="text-field">
                  {viewInvoice.senderAddress.postCode}
                </p>
                <p className="text-field">
                  {viewInvoice.senderAddress.country}
                </p>
              </div>
            ) : (
              <div>
                <p className="text-field">No client address</p>
              </div>
            )}
            <div className="grid grid-cols-2">
              <div>
                <p className="text-field">Invoice Date</p>
                <span className="headingS">{viewInvoice.createdAt}</span>
              </div>
              <div className="col-[1/2]">
                <p className="text-field">Payment Due</p>
                <span className="headingS">{viewInvoice.paymentDue}</span>
              </div>
              <div className="col-[2/-1] row-[1/3]">
                <p className="text-field">Bill To</p>
                <span className="headingS">{viewInvoice.clientName}</span>
                {viewInvoice.clientAddress !== undefined ? (
                  <div>
                    <p className="text-field">
                      {viewInvoice.clientAddress.street}
                    </p>
                    <p className="text-field">
                      {viewInvoice.clientAddress.city}
                    </p>
                    <p className="text-field">
                      {viewInvoice.clientAddress.postCode}
                    </p>
                    <p className="text-field">
                      {viewInvoice.clientAddress.country}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-field">No client address</p>
                  </div>
                )}
              </div>
            </div>
            <div>
              <p className="text-field">Sent to</p>
              <span className="headingS">{viewInvoice.clientEmail}</span>
            </div>
            <div className="mt-5">
              <div className=" bg-tertiary p-3 rounded-t-lg">
                <div>
                  {viewInvoice.items &&
                    viewInvoice.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-[15px] tracking-[-0.25px]">
                            {item.name}
                          </p>
                          <span className="font-bold text-[15px] tracking-[-0.25px] text-secondary-dark">
                            {item.quantity} x £{' '}
                          </span>
                          <span className="font-bold text-[15px] tracking-[-0.25px] text-secondary-dark">
                            {item.price}
                          </span>
                        </div>
                        <span className="font-bold text-[15px] tracking-[-0.25px]">
                          £ {item.total}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
              <div className="bg-neutral-darker p-3 rounded-b-lg flex items-center justify-between">
                <p className="text-sm font-medium tracking-[-0.1px] text-white">
                  Grand Total
                </p>
                <span className="font-bold text-2xl tracking-[-0.5px] text-white">
                  £ {viewInvoice.total}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[91px] bg-white dark:bg-primary-dark p-5 w-full flex items-center justify-between">
        <Link to={`/edit-invoice/${params.id}`}>
          <motion.button
            className="w-[73px] h-12  dark:!bg-primary-darker rounded-3xl  dark:hover:!bg-white"
            style={{ backgroundColor: '#f9fafe' }}
            whileHover={{ backgroundColor: '#dfe3fa' }}>
            <span className="headingS text-secondary-dark dark:text-white">
              Edit
            </span>
          </motion.button>
        </Link>
        <div>btn-1</div>
        <div>btn-1</div>
      </div>
    </section>
  );
}
