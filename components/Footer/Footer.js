import React from "react";
import Image from "next/image";
import FooterNav from "./FooterNav";
import FooterSignUp from "./FooterSignUp";
import Link from "next/link";
import PropTypes from "prop-types";

const Footer = ({ description, youtube, ig, facebook }) => {
  return (
    <>
      <p className='col-span-full text-lg leading-7 font-light px-2 md:col-span-7 md:px-0 md:order-1 xl:col-span-6 xl:text-xl xl:leading-8 '>
        {description}
      </p>

      <FooterNav />

      <FooterSignUp className='px-2 mt-20 md:mt-0 col-span-full md:col-span-5 md:order-2 xl:col-span-4 xl:col-start-9'>
        <div className='flex flex-row justify-between font-light text-tiny underline'>
          <Link href={youtube}>YOUTUBE</Link>
          <Link href={ig}>INSTAGRAM</Link>
          <Link href={facebook}>FACEBOOK</Link>
        </div>
        <p className='font-light text-base leading-6 mt-6'>
          Subscribe to our newsletter to get the latest information on events, updates, and more.
        </p>
        <div className='mt-8 '>
          <form className='flex flex-row'>
            <input type='text' name='name' className='p-4 px-4 resize-none outline-none border captiontext' placeholder='EMAIL ADDRESS' />
            <input
              type='submit'
              value='SIGN UP'
              className='bg-white text-midnight p-4 px-4 captiontext'
            />
          </form>
        </div>
      </FooterSignUp>

      <div className='col-start-2 col-span-2 place-self-center mt-14 md:order-3 md:col-span-3 xl:col-span-3 flex flex-col xl:mt-0'>
        <Image src='/images/pco-crest.png' alt='Psi Chi Omega Crest' width={240} height={211} />
        <h5 className='mx-auto text-3xl font-bold mt-4'>ΨΧΩ</h5>
      </div>

      <div className='col-span-full mt-6 font-light text-xs text-silver text-center pb-8 md:order-5'>
        <span>Copyright © 2021 Psi Chi Omega Fraternity ∙ GAMMA Chapter ∙ MPH AM S2K14 ∙ MBK</span>
      </div>
    </>
  );
};

Footer.propTypes = {
  description: PropTypes.string,
  youtube: PropTypes.string,
  ig: PropTypes.string,
  facebook: PropTypes.string,
};

export default Footer;
