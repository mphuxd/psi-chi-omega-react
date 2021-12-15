import { Formik, Form, Field, ErrorMessage } from "formik";

async function submitHandler(values) {
  try {
    const response = await fetch("/api/sheets", {
      method: "POST",
      body: JSON.stringify(values, null, 2),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(await response.json()); correct response received
  } catch (err) {
    console.error(err);
  }
}

const FooterSignUpForm = () => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          submitHandler(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col mt-8'>
          <ErrorMessage name='email' className='font--caption text-red '>
            {(msg) => <div className='text--minibody text-red-500'>{msg}</div>}
          </ErrorMessage>
          <div className='flex flex-row'>
            <Field
              type='email'
              name='email'
              className='p-4 px-4 resize-none outline-none text--caption text-midnight'
              placeholder='EMAIL ADDRESS'
            />
            <Field
              type='submit'
              name=''
              value='SIGN UP'
              className='bg-mist text-midnight resize-none outline-none p-4 px-4 text--caption'
              disabled={isSubmitting}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FooterSignUpForm;
