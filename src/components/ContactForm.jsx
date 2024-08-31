import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { addContact } from '../redux/contactsOps';

export default function ContactForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(values));
        resetForm();
      }}
    >
      <Form>
        <Field name="name" placeholder="Name" />
        <Field name="number" placeholder="Number" />
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}
