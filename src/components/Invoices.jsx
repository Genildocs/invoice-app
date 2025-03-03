import React, { useContext } from "react";
import { motion } from "motion/react";
import { LocalStorageContext } from "../context/LocalStorageContext";
import { cn } from "../utils";
import { Link } from "react-router";
export default function Invoices() {
  const { filterInvoices } = useContext(LocalStorageContext);

  return (
    <section className="mt-5">
      <ul className="flex flex-col items-center gap-2">
        {filterInvoices.map((invoice, index) => (
          <Link to={`view-invoice/${invoice["id"].toLowerCase()}`} key={index}>
            <motion.li
              className={cn(
                "dark:bg-primary-dark flex w-[20.5rem] justify-between rounded-lg border-[2px] border-solid bg-white p-5 lg:w-[45rem] dark:text-white",
              )}
              style={{ borderColor: "rgb(255,255,255,0)" }}
              whileHover={{ borderColor: "rgb(124,93,250,0.9)" }}
            >
              <div className="flex flex-col">
                <span className="text-[15px] font-bold tracking-[-0.25px]">
                  #{invoice.id}
                </span>
                <span className="text-secondary mt-5 mb-2 text-end text-sm font-medium tracking-[-0.1px]">
                  Due 28 sep 2020
                </span>
                <span className="text-[15px] font-bold tracking-[-0.25px]">
                  £ {invoice.total}
                </span>
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-secondary text-end text-sm font-medium tracking-[-0.1px]">
                  {invoice.clientName}
                </p>
                <div
                  className={cn(
                    "text-green-status relative flex h-10 w-24 items-center justify-center rounded-lg bg-green-100",
                    invoice.status === "pending" &&
                      "bg-orange-100 text-orange-500",
                    invoice.status === "draft" &&
                      "bg-secondary-light text-secondary-dark",
                  )}
                >
                  <div
                    className={cn(
                      "bg-green-status mr-2 h-2 w-2 rounded-full",
                      invoice.status === "pending" && "bg-orange-500",
                      invoice.status === "draft" && "bg-secondary-dark",
                    )}
                  />
                  <span className="text-[15px] font-bold tracking-[-0.25px]">
                    {invoice.status}
                  </span>
                </div>
              </div>
            </motion.li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
