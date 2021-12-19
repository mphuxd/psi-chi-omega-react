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
          //errors.email = "Required*";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          // errors.email = "Invalid email address";
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
            {(msg) => <div className='text--minibody text-red-500 mb-1 '>{msg}</div>}
          </ErrorMessage>
          <div className='flex flex-row'>
            <Field
              type='email'
              name='email'
              className='bg-midnight p-4 px-4 resize-none outline-none text--caption border border-1 border-white  text-slate-200 md:w-4/6  '
              placeholder='EMAIL ADDRESS'
            />
            <Field
              type='submit'
              name=''
              value='SIGN UP'
              className='bg-midnight text-white resize-none outline-none p-4 px-4 text--caption border border-1 border-white'
              disabled={isSubmitting} //use issubmitting to render a new button
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FooterSignUpForm;
