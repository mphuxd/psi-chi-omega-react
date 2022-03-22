import Head from "next/head";
import Wrapper from "../../components/Wrapper/Wrapper";
import Layout from "../../components/Layout";
import Image from "next/image";
import ContentBlockLinkFeed from "../../components/Content/ContentBlockLinkFeed";
import ContentBlockLinkFeedItem from "../../components/Content/ContentBlockLinkFeedItem";
import Grid from "../../components/Grid/Grid";
import LeaderSimpleMedia from "../../components/Leader/LeaderSimpleMedia";
import SectionHeader from "../../components/Heading/SectionHeader";
import ContentHeader from "../../components/Content/ContentHeader";
import ContentBody from "../../components/Content/ContentBody";
import ContentBlockLeftRight from "../../components/Content/ContentBlockLeftRight";

function Why(props) {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>Why Psi Chi Omega | ΨΧΩ</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>

      <Wrapper>
          <LeaderSimpleMedia
            heading='Why Psi Chi Omega'
            body='Step out of your comfort zone and join the best fraternity on campus. In your new
              journey, you will have many opportunities to create meaningful, long-lasting
              experiences, memories, and friendships as well as develop skills to prepare you for
              any obstacle in life.'
            imageSrc='/images/21-9_placeholder.png'
            imageAlt='placeholder1600x900'
            imageWidth={2100}
            imageHeight={900}
            imageLayout='responsive'
          />
        </Wrapper>
        {/* <Wrapper>
          <Grid
            className='mt-24 md:mt-20 lg:mt-24 gap-y-4 md:gap-y-6 lg:gap-y-6 xl:gap-y-8'
            isCenter={true}
          >
            <h1 className='text--headline col-span-full'>Why Psi Chi Omega</h1>
            <p className='col-span-full text--body lg:col-span-8'>
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
        </Wrapper> */}

        <Wrapper className='pb-12 sm:pb-8 md:pb-16 lg:pb-20'>
          <Grid className='mx-auto space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-32 '>
            {/* <ContentBlockLeftRight
              left={<h2 className='lg:w-1/2 text--minorheadline'>The People</h2>}
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
            /> */}
            <div className='col-span-full theme--grid_inner'>
              <h2 className='col-span-3 text--minorheadline'>The People</h2>
              <div className='col-span-7 text--body text--body space-y-6 mt-2 md:mt-4 lg:mt-0 max-w-3xl'>
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, mattis suscipit
                  est congue nec netus amet in. Erat morbi mattis orci viverra donec ornare amet ut
                  tincidunt. Eget lectus et faucibus at odio sed condimentum tincidunt.
                </p>
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, mattis suscipit
                  est congue nec netus amet in. Erat morbi mattis orci viverra donec ornare amet ut
                  tincidunt. Eget lectus et faucibus at odio sed condimentum tincidunt.
                </p>
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, mattis suscipit
                  est congue nec netus amet in. Erat morbi mattis orci viverra donec ornare amet ut
                  tincidunt. Eget lectus et faucibus at odio sed condimentum tincidunt.
                </p>
              </div>
            </div>

            <div className='col-span-full theme--grid_inner'>
              <h2 className='col-span-3 text--minorheadline'>The People</h2>
              <div className='col-span-7 text--body text--body space-y-6 mt-2 md:mt-4 lg:mt-0 max-w-3xl'>
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, mattis suscipit
                  est congue nec netus amet in. Erat morbi mattis orci viverra donec ornare amet ut
                  tincidunt. Eget lectus et faucibus at odio sed condimentum tincidunt.
                </p>
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, mattis suscipit
                  est congue nec netus amet in. Erat morbi mattis orci viverra donec ornare amet ut
                  tincidunt. Eget lectus et faucibus at odio sed condimentum tincidunt.
                </p>
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, mattis suscipit
                  est congue nec netus amet in. Erat morbi mattis orci viverra donec ornare amet ut
                  tincidunt. Eget lectus et faucibus at odio sed condimentum tincidunt.
                </p>
              </div>
            </div>

            <div className='col-span-full theme--grid_inner'>
              <h2 className='col-span-3 text--minorheadline'>The People</h2>
              <div className='col-span-7 text--body text--body space-y-6 mt-2 md:mt-4 lg:mt-0 max-w-3xl'>
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, mattis suscipit
                  est congue nec netus amet in. Erat morbi mattis orci viverra donec ornare amet ut
                  tincidunt. Eget lectus et faucibus at odio sed condimentum tincidunt.
                </p>
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, mattis suscipit
                  est congue nec netus amet in. Erat morbi mattis orci viverra donec ornare amet ut
                  tincidunt. Eget lectus et faucibus at odio sed condimentum tincidunt.
                </p>
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, mattis suscipit
                  est congue nec netus amet in. Erat morbi mattis orci viverra donec ornare amet ut
                  tincidunt. Eget lectus et faucibus at odio sed condimentum tincidunt.
                </p>
              </div>
            </div>
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

export default Why;
