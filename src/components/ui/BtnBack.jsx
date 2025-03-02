import React from 'react';
import { Link } from 'react-router';
import { AiOutlineCaretLeft } from 'react-icons/ai';
export default function BtnBack() {
  return (
    <>
      <Link to="/" className="inline-flex items-center">
        <AiOutlineCaretLeft className="fill-primary" />
        <span className="text-[15px] dark:text-white font-bold tracking-[-0.25px]">
          Go back
        </span>
      </Link>
    </>
  );
}
