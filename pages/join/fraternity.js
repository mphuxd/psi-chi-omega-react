import Head from "next/head";
import Wrapper from "../../components/Wrapper/Wrapper";
import Layout from "../../components/Layout";
import Image from "next/image";
import ContentBlockLinkFeed from "../../components/Content/ContentBlockLinkFeed";
import ContentBlockLinkFeedItem from "../../components/Content/ContentBlockLinkFeedItem";
import Grid from "../../components/Grid/Grid";
import SectionHeader from "../../components/Heading/SectionHeader";
import ContentHeader from "../../components/Content/ContentHeader";
import ContentBody from "../../components/Content/ContentBody";
import ContentBlockLeftRight from "../../components/Content/ContentBlockLeftRight";


function Fraternity() {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>Join Psi Chi Omega | ΨΧΩ</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Wrapper>
          <Grid
            className='mt-24 md:mt-20 lg:mt-24 gap-y-4 md:gap-y-6 lg:gap-y-6 xl:gap-y-8'
            isCenter={true}
          >
            <h1 className='text--superheadline col-span-full mx-auto text-center'>
              Join the brotherhood
            </h1>
            <p className='col-span-full lg:col-span-8 lg:col-start-3 text-center'>
              {" "}
              Step out of your comfort zone and join the best fraternity on campus. In your new
              journey, you will have many opportunities to create meaningful, long-lasting
              experiences, memories, and friendships as well as develop skills to prepare you for
              any obstacle in life.
            </p>
            <div className='col-span-full'>
              <Image
                src='/images/21-9_placeholder.png'
                alt='test'
                width={2100}
                height={900}
                layout='responsive'
              />
            </div>
          </Grid>
        </Wrapper>

        <Wrapper className='my-8 lg:my-16'>
          <Grid className='mx-auto relative'>
            <SectionHeader className='py-20 after:h-12 before:h-12 sm:py-20  sm:after:h-16 sm:before:h-16 md:after:h-20 md:before:h-20 md:py-28 xl:py-32 section-header--vertical-divider__top section-header--vertical-divider__bottom'>
              <ContentHeader title='Our Selection Process' isUppercase={false} isCenter={true} />
              <ContentBody
                isCenter={true}
                text='Psi Chi Omega recruits new brothers at the beginning of every fall and spring quarter during rush week — a week of events designed for us to get to know each other.  During this time, our brothers are looking for people who demonstrate behavior consistent with our values — those who display courage to step out of their comfort zone, who are genuine, dependable, and make an effort to get to know our community. If this sounds like you, we encourage you to come find us.'
              />
            </SectionHeader>
          </Grid>
        </Wrapper>

        <Wrapper className='py-12 sm:py-8 md:py-16 lg:py-20'>
          <Grid className='mx-auto space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-32 '>
            <ContentBlockLeftRight
              left={<ContentHeader className='lg:w-1/2' title='Attend Rush Week' />}
              right={
                <div className='content-block--text-join'>
                  <p className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, mattis
                    suscipit est congue nec netus amet in. Erat morbi mattis orci viverra donec
                    ornare amet ut tincidunt. Eget lectus et faucibus at odio sed condimentum
                    tincidunt.
                  </p>
                  <p className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, mattis
                    suscipit est congue nec netus amet in. Erat morbi mattis orci viverra donec
                    ornare amet ut tincidunt. Eget lectus et faucibus at odio sed condimentum
                    tincidunt.
                  </p>
                  <p className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, mattis
                    suscipit est congue nec netus amet in. Erat morbi mattis orci viverra donec
                    ornare amet ut tincidunt. Eget lectus et faucibus at odio sed condimentum
                    tincidunt.
                  </p>
                </div>
              }
            />
            <ContentBlockLeftRight
              left={<ContentHeader className='lg:w-1/2' title='Information Night' />}
              right={
                <div className='content-block--text-join'>
                  <p className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, mattis
                    suscipit est congue nec netus amet in. Erat morbi mattis orci viverra donec
                    ornare amet ut tincidunt. Eget lectus et faucibus at odio sed condimentum
                    tincidunt.
                  </p>
                </div>
              }
            />
            <ContentBlockLeftRight
              left={<ContentHeader className='lg:w-1/2' title='Application / Interview' />}
              right={
                <div className='content-block--text-join'>
                  <p className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, mattis
                    suscipit est congue nec netus amet in. Erat morbi mattis orci viverra donec
                    ornare amet ut tincidunt. Eget lectus et faucibus at odio sed condimentum
                    tincidunt.
                  </p>
                </div>
              }
            />
            <ContentBlockLeftRight
              left={<ContentHeader className='lg:w-1/2' title='Decision / Bid' />}
              right={
                <div className='content-block--text-join'>
                  <p className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, mattis
                    suscipit est congue nec netus amet in. Erat morbi mattis orci viverra donec
                    ornare amet ut tincidunt. Eget lectus et faucibus at odio sed condimentum
                    tincidunt.
                  </p>
                </div>
              }
            />
            <ContentBlockLeftRight
              left={<ContentHeader className='lg:w-1/2' title='What’s Next?' />}
              right={
                <div className='content-block--text-join'>
                  <p className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, mattis
                    suscipit est congue nec netus amet in. Erat morbi mattis orci viverra donec
                    ornare amet ut tincidunt. Eget lectus et faucibus at odio sed condimentum
                    tincidunt.
                  </p>
                </div>
              }
            />
            <ContentBlockLeftRight
              left={<ContentHeader className='lg:w-1/2' title='Advice & How to Prepare' />}
              right={
                <div className='content-block--text-join'>
                  <p className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, mattis
                    suscipit est congue nec netus amet in. Erat morbi mattis orci viverra donec
                    ornare amet ut tincidunt. Eget lectus et faucibus at odio sed condimentum
                    tincidunt.
                  </p>
                </div>
              }
            />
          </Grid>
        </Wrapper>

        <Wrapper className='py-12 md:py-20 lg:py-[128px]'>
          <Grid isCenter={true}>
            <ContentBlockLinkFeed>
              <ContentBlockLinkFeedItem
                className=''
                title='Join Psi Chi Omega'
                caption='Become a brother'
                link='/'
              />
              <ContentBlockLinkFeedItem
                className=''
                title='Little Sis Program'
                caption='About Little Sis'
                link='/'
              />
              <ContentBlockLinkFeedItem
                className=''
                title='Alumni'
                caption='About our alumni network'
                link='/'
              />
            </ContentBlockLinkFeed>
          </Grid>
        </Wrapper>
      </Layout>
    </div>
  );
}
export default Fraternity;
