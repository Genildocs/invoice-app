import React from "react";
import { useParams } from "react-router";
import BtnBack from "../components/ui/BtnBack.jsx";

export default function EditInvoice() {
  let params = useParams();

  return (
    <section className="bg-secondary-light dark:bg-neutral-darkest flex min-h-full flex-col justify-between pt-5 md:px-12 lg:px-44">
      <div className="px-6">
        <div>
          <BtnBack />
        </div>
        <div className="mt-3">
          <h2 className="text-4xl font-bold tracking-[-0.5px] dark:text-white">
            Edit <span className="uppercase">#{params.id}</span>
          </h2>
          <p className="headingS text-secondary-dark my-5 dark:text-white">
            Bill From
          </p>
          <form></form>
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
