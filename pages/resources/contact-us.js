import Head from "next/head";
import Layout from "../../components/Layout";
import Wrapper from "../../components/Wrapper/Wrapper";
import Image from "next/image";
import Grid from "../../components/Grid/Grid";
import LeaderSimple from "../../components/Leader/LeaderSimple";
import { Formik } from "formik";
import { useForm, Controller } from "react-hook-form";
import FormInputLabel from "../../components/Form/FormInputLabel";
import FormInputContainer from "../../components/Form/FormInputContainer";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>Contact Us | ΨΧΩ</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Wrapper>
          <LeaderSimple
            upperCase={false}
            heading='Contact Us'
            body='If you have any questions or concerns, you might find answers in our FAQ, or you can contact us here. After submiting your message, we’ll get back to you within 4-5 business days. If you’d like to remain anonymous, please let us know and we’ll keep your information confidential. All hazing reports are taken seriously and handled by our alumni and national board for investigation. '
          />
        </Wrapper>

        <Wrapper>
          <Grid isCenter={true}>
            <form
              className='my-12 md:my-16 lg:mt-0 col-span-full theme--grid_inner grid-rows-6 md:grid-rows-6 gap-y-8 md:gap-y-12 lg:gap-y-16 lg:mb-48'
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormInputContainer className=''>
                <FormInputLabel name='Name' />
                <input
                  className='form--input'
                  {...register("name", { required: true, maxLength: 80 })}
                />
                <div className='form--input-error'>
                  {errors.name?.type === "required" && "A name or alias is required"}
                  {errors.name?.type === "maxLength" && "Input is too long"}
                </div>
              </FormInputContainer>

              <FormInputContainer className=''>
                <FormInputLabel name='Your Email Address' />
                <input
                  type='text'
                  className='form--input'
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    },
                  })}
                />
                <div className='form--input-error'>
                  {errors.email?.type === "required" && "Enter a valid e-mail address"}
                  {errors.email?.type === "pattern" && "Enter a valid e-mail address"}
                </div>
              </FormInputContainer>

              <FormInputContainer className='row-start-3 sm:row-start-2'>
                <FormInputLabel name='Subject' />
                <input
                  type='text'
                  className='form--input'
                  {...register("subject", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                <div className='form--input-error'>
                  {errors.subject?.type === "required" && "Please enter a message subject"}
                  {errors.subject?.type === "maxLength" && "Subject is too long"}
                </div>
              </FormInputContainer>

              <div className='col-span-full row-span-3 row-start-4 md:row-start-3 md:row-span-3 lg:col-span-8 flex flex-col relative'>
                <label className='pb-4 pl-2 text-tiny font-normal font-body' htmlFor=''>
                  Message
                </label>
                <textarea
                  type='text'
                  className='h-full p-2 outline outline-1 outline-silver  text--body'
                  {...register("message", { required: true })}
                />
                <div className='form--input-error'>
                  {errors.message?.type === "required" && "Please enter a message"}
                </div>
              </div>

              <button
                className='min-w-[120px] row-start-7 md:row-start-6 p-2 outline-1 outline flex flex-row justify-center items-center'
                type='submit'
              >
                <span className='text--button pr-2'>SUBMIT</span>

                <Image
                  src='/images/icons/arrow_nopadding.svg'
                  alt='test'
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
