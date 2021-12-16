import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero/Hero";
import HeroTitle from "../components/Hero/HeroTitle";
import Wrapper from "../components/Wrapper/Wrapper";
import HeroImage from "../components/Hero/HeroImage";
import Link from "next/link";

const Development = () => {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>Psi Chi Omega Fraternity</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Wrapper className='justify-center'>
          <Hero className='flex flex-col justify-center'>
            <HeroTitle className='' text='Webpage in-development' />
            <Link href='/' passHref>
              <button className='border border-black border-1 px-4 py-2 mx-auto mt-8'>
                Return Home
              </button>
            </Link>
          </Hero>
        </Wrapper>
      </Layout>
    </div>
  );
};

export default Development;
