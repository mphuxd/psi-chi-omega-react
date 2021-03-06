import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  Layout,
  Wrapper,
  Grid,
  LeaderSimple,
  FormInputContainer,
  FormInputLabel,
  Meta,
} from "@/components";

import { fetchAPI } from "../api/strapi";

export async function getStaticProps({ params }) {
  const contactRes = await fetchAPI("/contact-us", {
    populate: "*",
  });

  return {
    props: {
      contact: contactRes.data.attributes,
    },
    revalidate: 1,
  };
}

function ContactUs({ contact }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  //hook up API after buying license

  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>Contact Us | ΨΧΩ</title>
        <Meta
          description='Psi Chi Omega is an Asian-interest fraternity at UC Davis that provides students with cultural space and community to help them understand and connect with their Asian-American identity. '
          keywords='Psi, Chi, Omega, Psi Chi Omega, fraternity, Gamma, Chapter, UC Davis, California, Integrity, Perseverance, Eternal Brotherhood'
          url='/'
          title='Contact Us | ΨΧΩ'
          imgURL=''
          twitterHandle=''
          
        />
      </Head>

      <Layout>
        <Wrapper>
          <LeaderSimple
            upperCase={false}
            heading={contact.heading}
            body={
              <>
                If you have any questions or concerns, you might find answers in our{" "}
                <Link href='/resources/faq'>
                  <a className='underline'>FAQ</a>
                </Link>
                , or you can contact us here. {contact.body}
              </>
            }
          />
        </Wrapper>

        <Wrapper>
          <Grid isCenter={true}>
            <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
              <FormInputContainer className=''>
                <FormInputLabel name='Name' />
                <input
                  className='form-input'
                  {...register("name", { required: true, maxLength: 80 })}
                />
                <div className='form-input__error'>
                  {errors.name?.type === "required" && "A name or alias is required"}
                  {errors.name?.type === "maxLength" && "Input is too long"}
                </div>
              </FormInputContainer>

              <FormInputContainer className=''>
                <FormInputLabel name='Your Email Address' />
                <input
                  type='text'
                  className='form-input'
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    },
                  })}
                />
                <div className='form-input__error'>
                  {errors.email?.type === "required" && "Enter a valid e-mail address"}
                  {errors.email?.type === "pattern" && "Enter a valid e-mail address"}
                </div>
              </FormInputContainer>

              <FormInputContainer className='row-start-3 sm:row-start-2'>
                <FormInputLabel name='Subject' />
                <input
                  type='text'
                  className='form-input'
                  {...register("subject", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                <div className='form-input__error'>
                  {errors.subject?.type === "required" && "Please enter a message subject"}
                  {errors.subject?.type === "maxLength" && "Subject is too long"}
                </div>
              </FormInputContainer>

              <div className='form-texarea-container'>
                <label className='pb-4 pl-2 text-tiny font-normal font-body' htmlFor=''>
                  Message
                </label>
                <textarea
                  type='text'
                  className='form-texarea'
                  {...register("message", { required: true })}
                />
                <div className='form-input__error'>
                  {errors.message?.type === "required" && "Please enter a message"}
                </div>
              </div>

              <button className='form-submit' type='submit'>
                <span className='text--button pr-2'>SUBMIT</span>
                <Image
                  src='/images/icons/arrow_nopadding.png'
                  alt='Arrow'
                  width={16}
                  height={16}
                  layout='fixed'
                />
              </button>
            </form>
          </Grid>
        </Wrapper>
      </Layout>
    </div>
  );
}

export default ContactUs;
