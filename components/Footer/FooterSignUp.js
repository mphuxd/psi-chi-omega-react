import Link from "next/link";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FooterSignUp = ({ youtube, ig, facebook, text }) => {
  return (
    <div className='px-2 mt-20 md:mt-0 col-span-full flex flex-col items-center sm:block sm:max-w-none sm:col-span-5 sm:order-4 md:col-span-5 md:order-2 xl:col-span-4 xl:col-start-9'>
      <div className='flex flex-row justify-between space-between w-full max-w-[400px] sm:max-w-none content-between font-light text-tiny underline'>
        <Link href={youtube}>YOUTUBE</Link>
        <Link href={ig}>INSTAGRAM</Link>
        <Link href={facebook}>FACEBOOK</Link>
      </div>

      <p className='text--body text-left mt-5 w-full max-w-[400px] sm:max-w-none'>{text}</p>

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
            alert(JSON.stringify(values, null, 2));
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
    </div>
  );
};

FooterSignUp.propTypes = {
  youtube: PropTypes.string,
  ig: PropTypes.string,
  facebook: PropTypes.string,
  text: PropTypes.string,
};

export default FooterSignUp;
