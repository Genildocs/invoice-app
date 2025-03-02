import React, { use } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// const MyTextInput = ({ label, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <div className="mb-2">
//       <label htmlFor={props.id || props.name} className="text-field">
//         {label}
//       </label>
//       <input
//         className="w-full headingS rounded-md p-2 focus:outline-none border border-[#DFE3FA] placeholder:font-bold placeholder:text-sm placeholder:text-[15px] placeholder:tracking-[-0.25px]"
//         {...field}
//         {...props}
//       />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </div>
//   );
// };

// const MySelect = ({ label, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <div className="mb-2">
//       <label htmlFor={props.id || props.name} className="text-field">
//         {label}
//       </label>
//       <select
//         {...field}
//         {...props}
//         className="block w-full headingS rounded-md p-2 focus:outline-none border border-[#DFE3FA]"
//       />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </div>
//   );
// };

export default function FormInvoices() {
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          email: '',
          street: ['', ''],
          city: ['', ''],
          postCode: ['', ''],
          country: ['', ''],
          date: new Date().toISOString().split('T')[0],
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Name is required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          street: Yup.array().required('Required'),
          city: Yup.array().required('Required'),
          postCode: Yup.array().required('Required'),
          country: Yup.array().required('Required'),
          date: Yup.date().required('Required'),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}>
        <Form>
          {/* <div className="mt-5">
            <span className="mb-2 inline-block">Bill From</span>
            <MyTextInput
              label="Street Address"
              name="street[0]"
              type="text"
              placeholder="Ex. 10 Downing Street"
            />
            <div className="flex gap-5">
              <MyTextInput
                label="City"
                name="city[0]"
                type="text"
                placeholder="Ex. London"
              />
              <MyTextInput
                label={'Post Code'}
                name="postCode[0]"
                type="text"
                placeholder="Ex. SW1A 1AA"
              />
            </div>
            <MyTextInput
              label={'Country'}
              name="country[0]"
              type="text"
              placeholder="Ex. United States"
            />
          </div>
          <div className="mt-5">
            <span className="mb-2 inline-block">Bill To</span>
            <MyTextInput
              label="Client’s Name"
              name="firstName"
              type="text"
              placeholder="Jane"
            />
            <MyTextInput
              label="Client’s Email"
              name="email"
              type="text"
              placeholder="xk4eD@example.com"
            />
            <MyTextInput
              label="Street Address"
              name="street[1]"
              type="text"
              placeholder="Ex. 10 Downing Street"
            />
            <div className="flex gap-5">
              <MyTextInput
                label="City"
                name="city[1]"
                type="text"
                placeholder="Ex. London"
              />
              <MyTextInput
                label={'Post Code'}
                name="postCode[1]"
                type="text"
                placeholder="Ex. SW1A 1AA"
              />
            </div>
            <MyTextInput
              label={'Country'}
              name="country[1]"
              type="text"
              placeholder="Ex. United States"
            />
            <MyTextInput label={'Invoice Date'} name="date" type="date" />
            <MySelect label="Payment Terms" name="paymentTerms">
              <option value="">Select Payment Terms</option>
              <option value="1">Net 1 Day</option>
              <option value="7">Net 7 Days</option>
              <option value="14">Net 14 Days</option>
              <option value="30">Net 30 Days</option>
            </MySelect>
            <MyTextInput
              label={'Project Description'}
              name="description"
              type="text"
              placeholder="Ex. Work performed"
            />
          </div> */}
          <div className="mt-5">
            <span className="inline-block mt-2">Bill To</span>
            <div>
              <label htmlFor="firstName">First Name</label>
              <Field
                name="firstName"
                type="text"
                placeholder="Jane"
                className="w-full headingS rounded-md p-2 focus:outline-none border border-[#DFE3FA] placeholder:font-bold placeholder:text-sm placeholder:text-[15px] placeholder:tracking-[-0.25px]"
              />
              <ErrorMessage
                name="firstName"
                component="span"
                className=" text-red-500"
              />
            </div>
          </div>
          <button type="submit">+ Add New Item</button>
        </Form>
      </Formik>
    </>
  );
}
