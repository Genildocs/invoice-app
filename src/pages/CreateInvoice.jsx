import React from 'react';
import { Link } from 'react-router';
import { AiOutlineCaretLeft } from 'react-icons/ai';
import FormInvoices from '../components/FormInvoices';

export default function CreateInvoice() {
  return (
    <section className="flex flex-col justify-between md:px-12 lg:px-44 pt-5 bg-white dark:bg-neutral-darkest min-h-full">
      <div className="px-6">
        <div>
          <Link to="/" className="flex items-center">
            <AiOutlineCaretLeft className=" fill-primary" />
            <span className="text-[15px] dark:text-white font-bold tracking-[-0.25px]">
              Go back
            </span>
          </Link>
        </div>
        <div className="mt-3">
          <h2 className=" text-4xl font-bold tracking-[-0.5px] dark:text-white">
            New Invoice
          </h2>

          <FormInvoices />
        </div>
      </div>
      <div className="h-[91px] bg-white dark:bg-primary-dark p-5 w-full flex items-center justify-between ">
        <div>btn-1</div>
        <div>btn-1</div>
        <div>btn-1</div>
      </div>
    </section>
  );
}
