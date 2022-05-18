import Head from "next/head";
import React from "react";
import Image from "next/image";
import { Layout, Wrapper, Grid, Meta } from "@/components";
import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../api/strapi";

export async function getStaticProps({ params }) {
  const covidRes = await fetchAPI("/covid-19", {
    populate: {
      "*": { populate: "*" },
      covid: { populate: "*" },
      bullet: { populate: "*" },
      leader: {
        populate: {
          image: { fields: ["alternativeText", "width", "height", "url"] },
        },
      },
      links: { populate: "*" },
    },
  });

  return {
    props: {
      covid: covidRes.data.attributes,
      leader: covidRes.data.attributes.leader,
      links: covidRes.data.attributes.links,
    },
    revalidate: 1,
  };
}

function Covid19({ covid, leader, links }) {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>COVID-19 | ΨΧΩ</title>
        <Meta
          description='Psi Chi Omega is an Asian-interest fraternity at UC Davis that provides students with cultural space and community to help them understand and connect with their Asian-American identity. '
          keywords='Psi, Chi, Omega, Psi Chi Omega, fraternity, Gamma, Chapter, UC Davis, California, Integrity, Perseverance, Eternal Brotherhood'
          url='/'
          title='COVID-19 | ΨΧΩ'
          imgURL=''
          twitterHandle=''
          faviconHref='/favicon.ico'
        />
      </Head>

      <Layout>
        <Wrapper>
          <Grid className='mt-24 md:mt-20 lg:mt-24' isCenter={true}>
            <h1 className='col-span-full text-center text--headline'>{leader.title}</h1>
            <div className='col-span-full mt-4 md:mt-6 lg:mt-8'>
              <Image
                src={leader.image.data.attributes.url}
                alt='Placeholder'
                width={leader.image.data.attributes.width}
                height={leader.image.data.attributes.height}
                layout='responsive'
                priority={true}
              />
            </div>
          </Grid>
        </Wrapper>
        <Wrapper className='my-6 md:my-12 lg:my-20'>
          <Grid className='' isCenter={true}>
            <div className='col-span-full lg:col-start-3 lg:col-span-7 text--body space-y-8'>
              {<ReactMarkdown parserOptions={{ commonmark: true }}>{covid.copy}</ReactMarkdown>}
              <ol className='list-disc list-inside space-y-8'>
                {covid.bullet.map((bullet, i) => {
                  return (
                    <li key={i}>
                      <ReactMarkdown
                        components={{
                          p: React.Fragment,
                        }}
                        parserOptions={{ commonmark: true }}
                      >
                        {bullet.text}
                      </ReactMarkdown>
                    </li>
                  );
                })}
              </ol>
            </div>
          </Grid>
        </Wrapper>

        <Wrapper className='mt-20 mb-32'>
          <Grid className='' isCenter={true}>
            <div className='col-span-full lg:col-start-3 lg:col-span-7  text--body space-y-8'>
              <h2 className='text--subheadline'>Resources</h2>
              <ol className='underline space-y-4'>
                {links.map((link, i) => {
                  return (
                    <li key={i} className=''>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  );
                })}
              </ol>
            </div>
          </Grid>
        </Wrapper>
      </Layout>
    </div>
  );
}
export default Covid19;
