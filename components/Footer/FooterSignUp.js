import Link from "next/link";
import PropTypes from "prop-types";
import FooterSignUpForm from "./FooterSignUpForm";

const FooterSignUp = ({ youtube, ig, facebook, text }) => {
  return (
    <div className='px-2 mt-20 md:mt-0 col-span-full flex flex-col items-center sm:block sm:max-w-none sm:col-span-5 sm:order-4 md:col-span-5 md:order-2 xl:col-span-4 xl:col-start-9'>
      <div className='flex flex-row justify-between space-between w-full max-w-[400px] sm:max-w-none content-between font-light text-tiny underline'>
        <Link href={youtube}>YOUTUBE</Link>
        <Link href={ig}>INSTAGRAM</Link>
        <Link href={facebook}>FACEBOOK</Link>
      </div>

      <p className='text--body text-left mt-5 w-full max-w-[400px] sm:max-w-none'>{text}</p>

      <FooterSignUpForm />
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
