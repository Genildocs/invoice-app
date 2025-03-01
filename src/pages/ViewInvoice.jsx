import React from 'react';
import { Link } from 'react-router';
import { AiOutlineCaretLeft } from 'react-icons/ai';

export default function ViewInvoice() {
  return (
    <section className="px-6 md:px-12 lg:px-44 py-5">
      <div>
        <Link to="/" className="flex items-center">
          <AiOutlineCaretLeft className=" fill-primary" />
          <span className="text-[15px] dark:text-white font-bold tracking-[-0.25px]">
            Go back
          </span>
        </Link>
      </div>
    </section>
  );
}
