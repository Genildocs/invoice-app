import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function FormInvoices() {
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          email: '',
          streetFrom: '',
          streetTo: '',
          city1: '',
          city2: '',
          postCode1: '',
          postCode2: '',
          country1: '',
          country2: '',
          date: new Date().toISOString().split('T')[0],
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Name is required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          streetFrom: Yup.string().required('Required'),
          streetTo: Yup.string().required('Required'),
          city1: Yup.string().required('Required'),
          city2: Yup.string().required('Required'),
          postCode1: Yup.string().required('Required'),
          postCode2: Yup.string().required('Required'),
          country1: Yup.string().required('Required'),
          country2: Yup.string().required('Required'),
          date: Yup.date().required('Required'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}>
        <Form>
          <div className="mt-5">
            <span className="inline-block mt-2 mb-5 headingS text-primary-light">
              Bill From
            </span>
            <div className="mb-2">
              <label
                htmlFor="streetFrom"
                className="text-field mb-2 inline-block">
                Street Address
              </label>
              <Field
                name="streetFrom"
                type="text"
                placeholder="Street Address"
                className="headingS inputStyle"
              />
              <ErrorMessage
                name="streetFrom"
                component="span"
                className="mt-[10px] text-sm text-red-500"
              />
            </div>
            <div className="flex justify-between gap-5 mb-2">
              <div>
                <label htmlFor="city1" className="text-field mb-2 inline-block">
                  City
                </label>
                <Field
                  name="city1"
                  type="text"
                  placeholder="City"
                  className="headingS inputStyle"
                />
                <ErrorMessage
                  name="city1"
                  component="span"
                  className="mt-[10px] text-sm text-red-500"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="postCode1"
                  className="text-field mb-2 inline-block">
                  Post Code
                </label>
                <Field
                  name="postCode1"
                  type="text"
                  placeholder="Post Code"
                  className="headingS inputStyle"
                />
                <ErrorMessage
                  name="postCode1"
                  component="span"
                  className="mt-[10px] text-sm text-red-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="country1"
                className="text-field mb-2 inline-block">
                Country
              </label>
              <Field
                name="country1"
                type="text"
                placeholder="Country"
                className="headingS inputStyle"
              />
              <ErrorMessage
                name="country1"
                component="span"
                className="mt-[10px] text-sm text-red-500"
              />
            </div>
          </div>
          <div className="mt-5">
            <span className="inline-block mt-2 mb-5 headingS text-primary-light">
              Bill To
            </span>
            <div className="mb-2">
              <label
                htmlFor="firstName"
                className="text-field mb-2 inline-block">
                Client’s Name
              </label>
              <Field
                name="firstName"
                type="text"
                placeholder="Jane"
                className="headingS inputStyle"
              />
              <ErrorMessage
                name="firstName"
                component="span"
                className="mt-[10px] text-sm text-red-500"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="text-field mb-2 inline-block">
                Client’s Email
              </label>
              <Field
                name="email"
                type="text"
                placeholder="xkTJF@example.com"
                className="headingS inputStyle"
              />
              <ErrorMessage
                name="email"
                component="span"
                className="mt-[10px] text-sm text-red-500"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="streetTo"
                className="text-field mb-2 inline-block">
                Street Address
              </label>
              <Field
                name="streetTo"
                type="text"
                placeholder="Street Address"
                className="headingS inputStyle"
              />
              <ErrorMessage
                name="streetTo"
                component="span"
                className="mt-[10px] text-sm text-red-500"
              />
            </div>
            <div className="flex justify-between gap-5 mb-2">
              <div>
                <label htmlFor="city2" className="text-field mb-2 inline-block">
                  City
                </label>
                <Field
                  name="city2"
                  type="text"
                  placeholder="City"
                  className="headingS inputStyle"
                />
                <ErrorMessage
                  name="city2"
                  component="span"
                  className="mt-[10px] text-sm text-red-500"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="postCode2"
                  className="text-field mb-2 inline-block">
                  Post Code
                </label>
                <Field
                  name="postCode2"
                  type="text"
                  placeholder="Post Code"
                  className="headingS inputStyle"
                />
                <ErrorMessage
                  name="postCode2"
                  component="span"
                  className="mt-[10px] text-sm text-red-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="country2"
                className="text-field mb-2 inline-block">
                Country
              </label>
              <Field
                name="country2"
                type="text"
                placeholder="Country"
                className="headingS inputStyle"
              />
              <ErrorMessage
                name="country2"
                component="span"
                className="mt-[10px] text-sm text-red-500"
              />
            </div>
          </div>

          <button type={'submit'}>+ Add item</button>
        </Form>
      </Formik>
    </>
  );
}
