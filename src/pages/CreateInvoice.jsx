import React from "react";
import FormInvoices from "../components/form/FormInvoices.jsx";
import BtnBack from "../components/ui/BtnBack.jsx";

export default function CreateInvoice() {
  return (
    <section className="dark:bg-neutral-darkest flex min-h-full flex-col justify-between bg-white pt-5 md:px-12 lg:px-44">
      <div className="px-6">
        <div>
          <BtnBack />
        </div>
        <div className="mt-3">
          <h2 className="text-4xl font-bold tracking-[-0.5px] dark:text-white">
            New Invoice
          </h2>
          <FormInvoices />
        </div>
      </div>
      <div className="dark:bg-primary-dark flex h-[91px] w-full items-center justify-between bg-white p-5">
        <div>btn-1</div>
        <div>btn-1</div>
        <div>btn-1</div>
      </div>
    </section>
  );
}
