import React, { useContext, useEffect, useState } from 'react';
import { cn } from '../utils';
import { motion } from 'motion/react';
import { Link, useParams } from 'react-router';
import { AiOutlineCaretLeft } from 'react-icons/ai';
import { LocalStorageContext } from '../context/LocalStorageContext';
import BtnBack from '../components/ui/BtnBack.jsx';
import Button from '../components/ui/Button.jsx';

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
    <section className="bg-secondary-light dark:bg-neutral-darkest flex min-h-full flex-col justify-between pt-5 md:px-12 lg:px-44">
      <div className="px-6">
        <div>
          <BtnBack />
        </div>
        <div className="mt-5 flex flex-col items-center">
          <div className="dark:bg-primary-dark flex w-[20.5rem] items-center justify-between rounded-lg bg-white p-5 dark:text-white">
            <span className="text-secondary text-end text-sm font-medium tracking-[-0.1px]">
              Status
            </span>
            <div
              className={cn(
                'text-green-status relative flex h-10 w-24 items-center justify-center rounded-lg bg-green-100',
                viewInvoice.status === 'pending' &&
                  'bg-orange-100 text-orange-500',
                viewInvoice.status === 'draft' &&
                  'bg-secondary-light text-secondary-dark'
              )}>
              <div
                className={cn(
                  'bg-green-status mr-2 h-2 w-2 rounded-full',
                  viewInvoice.status === 'pending' && 'bg-orange-500',
                  viewInvoice.status === 'draft' && 'bg-secondary-dark'
                )}
              />
              <p className="headingS">{viewInvoice.status}</p>
            </div>
          </div>
          <div className="dark:bg-primary-dark mt-3 w-[20.5rem] rounded-lg bg-white p-5">
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
              <div className="bg-tertiary rounded-t-lg p-3">
                <div>
                  {viewInvoice.items &&
                    viewInvoice.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between">
                        <div>
                          <p className="text-[15px] font-bold tracking-[-0.25px]">
                            {item.name}
                          </p>
                          <span className="text-secondary-dark text-[15px] font-bold tracking-[-0.25px]">
                            {item.quantity} x £{' '}
                          </span>
                          <span className="text-secondary-dark text-[15px] font-bold tracking-[-0.25px]">
                            {item.price}
                          </span>
                        </div>
                        <span className="text-[15px] font-bold tracking-[-0.25px]">
                          £ {item.total}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
              <div className="bg-neutral-darker flex items-center justify-between rounded-b-lg p-3">
                <p className="text-sm font-medium tracking-[-0.1px] text-white">
                  Grand Total
                </p>
                <span className="text-2xl font-bold tracking-[-0.5px] text-white">
                  £ {viewInvoice.total}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-primary-dark flex h-[91px] w-full items-center justify-between bg-white p-5">
        <Link to={`/edit-invoice/${params.id}`}>
          <motion.button
            className="dark:!bg-primary-darker h-12 w-[73px] rounded-3xl dark:hover:!bg-white"
            style={{ backgroundColor: '#f9fafe' }}
            whileHover={{ backgroundColor: '#dfe3fa' }}>
            <span className="headingS text-secondary-dark dark:text-white">
              Edit
            </span>
          </motion.button>
        </Link>
        <div>
          <Button className="bg-red-500 hover:bg-red-600 px-4 rounded-4xl tracking-[-0.25px]">
            <span>Delete</span>
          </Button>
        </div>
        <div>
          <Button className="bg-primary-light hover:bg-primary px-4 rounded-4xl tracking-[-0.25px]">
            <span>Mark as Paid</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
