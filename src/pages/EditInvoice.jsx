import React from 'react';
import {  useParams } from 'react-router';
import BtnBack from "../components/ui/BtnBack.jsx";

export default function EditInvoice() {
  let params = useParams();

  return (
    <section className="flex flex-col justify-between md:px-12 lg:px-44 pt-5 bg-secondary-light dark:bg-neutral-darkest min-h-full">
      <div className="px-6">
        <div>
         <BtnBack />
        </div>
        <div className="mt-3">
          <h2 className=" text-4xl font-bold tracking-[-0.5px] dark:text-white">
            Edit <span className="uppercase">#{params.id}</span>
          </h2>
          <p className="headingS text-secondary-dark dark:text-white my-5">
            Bill From
          </p>
          <form></form>
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
