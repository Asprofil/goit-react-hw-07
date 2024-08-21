import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/ContactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();

  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length < 3) {
      errors.name = 'Too Short!';
    } else if (values.name.length > 50) {
      errors.name = 'Too Long!';
    }

    if (!values.number) {
      errors.number = 'Required';
    }

    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    const newContact = { ...values, id: `id-${Date.now()}` };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <Field name="number" type="text" />
            <ErrorMessage name="number" component="div" />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
