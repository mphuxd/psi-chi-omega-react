import Head from "next/head";
import Image from "next/image";
import { Layout, Wrapper, Grid, Meta } from "@/components";

function Covid19() {
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
            <h1 className='col-span-full text-center text--headline'>
              COVID-19 Information for Students
            </h1>
            <div className='col-span-full mt-4 md:mt-6 lg:mt-8'>
              <Image
                src='/images/davis-water-tower.jpg'
                alt='Placeholder'
                width={860}
                height={344}
                layout='responsive'
                priority={true}
              />
            </div>
          </Grid>
        </Wrapper>
        <Wrapper className='my-6 md:my-12 lg:my-20'>
          <Grid className='' isCenter={true}>
            <div className='col-span-full lg:col-start-3 lg:col-span-7 text--body space-y-8'>
              <p className='font-bold'>
                The health, safety, and well-being of our community, on and off campus, is our top
                priority.
              </p>
              <p className=''>
                To proceed with plans to repopulate campus this fall, we will continue to draw upon
                health and safety protocols that have helped to keep our community safe during the
                current academic year. We will continue to update plans and procedures as new
                information is released from UC Davis. We also recommend all students to stay
                informed by regularly visiting UC Davis’ COVID-19 website.
              </p>
              <ol className='list-disc list-inside space-y-8'>
                <li className=''>
                  Psi Chi Omega will be accepting new members in Fall 2021 with UC Davis approval
                  but may be postponed or cancelled at any time.{" "}
                  <strong>All applicants must be vaccinated.</strong>
                </li>
                <li className=''>
                  For Fall quarter 2021, all members are required to be vaccinated. Vaccinated
                  students and members will be permitted to attend our events once our operations
                  are allowed to safely resume.
                </li>
                <li className=''>
                  For Spring 2020, all in-person events have been cancelled or postponed. Some
                  events with greek organizations may be conducted virtually through Zoom.{" "}
                </li>
              </ol>
            </div>
          </Grid>
        </Wrapper>

        <Wrapper className='mt-20 mb-32'>
          <Grid className='' isCenter={true}>
            <div className='col-span-full lg:col-start-3 lg:col-span-7  text--body space-y-8'>
              <h2 className='text--subheadline'>Resources</h2>
              <ol className='underline space-y-4'>
                <li className=''>
                  <a href=''>UC Davis COVID-19 Website</a>
                </li>
                <li>
                  <a href=''>Information for Students and Families</a>
                </li>
                <li>
                  <a href=''>COVID-19 Testing</a>
                </li>
                <li>
                  <a href=''>UC Davis COVID-19 Vaccine Program</a>
                </li>
                <li>
                  <a href=''>UC Davis Campus Ready Plan</a>
                </li>
              </ol>
            </div>
          </Grid>
        </Wrapper>
      </Layout>
    </div>
  );
}
export default Covid19;