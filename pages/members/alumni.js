import Head from "next/head";
import Wrapper from "../../components/Wrapper/Wrapper";
import Layout from "../../components/Layout";
import LeaderSimpleMedia from "../../components/Leader/LeaderSimpleMedia";
import Image from "next/image";
import ContentBlockLeftRightOffset from "../../components/Content/ContentBlockLeftRightOffset";
import ContentBlockText from "../../components/Content/ContentBlockText";
import ContentBlockLinkFeed from "../../components/Content/ContentBlockLinkFeed";
import ContentBlockLinkFeedItem from "../../components/Content/ContentBlockLinkFeedItem";
import Grid from "../../components/Grid/Grid";

function Alumni() {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>Brothers | ΨΧΩ</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Wrapper>
          <LeaderSimpleMedia
            heading='Our Alumni'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo'
            imageSrc='/images/21-9_placeholder.png'
            imageAlt='placeholder1600x900'
            imageWidth={2100}
            imageHeight={900}
            imageLayout='responsive'
          />
        </Wrapper>

        <Wrapper className='mt-24 md:mt-20 lg:mt-0 pb-20 lg:pb-32 gap-y-16 md:gap-y-24 lg:gap-y-32 '>
          <ContentBlockLeftRightOffset
            center={true}
            reverse={true}
            left={
              <ContentBlockText
                className='my-auto'
                header='Where we are now'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl orci scelerisque mi nec feugiat facilisis eget in elementum. Neque lacinia dolor, quam arcu, dis.'
              />
            }
            right={
              <div className='grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-rows-3 md:grid-cols-3 md:gap-4'>
                <div className="col-span-1 row-span-1">
                  <Image
                    src='/images/4-3_placeholder.jpg'
                    alt='test'
                    width={1200}
                    height={900}
                    layout='responsive'
                  />
                </div>
                <div className="col-span-1 row-span-1">
                  <Image
                    src='/images/4-3_placeholder.jpg'
                    alt='test'
                    width={1200}
                    height={900}
                    layout='responsive'
                  />
                </div>
                <div className="col-span-1 row-span-1">
                  <Image
                    src='/images/4-3_placeholder.jpg'
                    alt='test'
                    width={1200}
                    height={900}
                    layout='responsive'
                  />
                </div>
                <div className="col-span-1 row-span-1">
                  <Image
                    src='/images/4-3_placeholder.jpg'
                    alt='test'
                    width={1200}
                    height={900}
                    layout='responsive'
                  />
                </div>
                <div className="col-span-1 row-span-1">
                  <Image
                    src='/images/4-3_placeholder.jpg'
                    alt='test'
                    width={1200}
                    height={900}
                    layout='responsive'
                  />
                </div>
                <div className="col-span-1 row-span-1">
                  <Image
                    src='/images/4-3_placeholder.jpg'
                    alt='test'
                    width={1200}
                    height={900}
                    layout='responsive'
                  />
                </div>
                <div className="col-span-1 row-span-1">
                  <Image
                    src='/images/4-3_placeholder.jpg'
                    alt='test'
                    width={1200}
                    height={900}
                    layout='responsive'
                  />
                </div>
                <div className="col-span-1 row-span-1">
                  <Image
                    src='/images/4-3_placeholder.jpg'
                    alt='test'
                    width={1200}
                    height={900}
                    layout='responsive'
                  />
                </div>
                <div className="col-span-1 row-span-1">
                  <Image
                    src='/images/4-3_placeholder.jpg'
                    alt='test'
                    width={1200}
                    height={900}
                    layout='responsive'
                  />
                </div>
              </div>
            }
          />
          <ContentBlockLeftRightOffset
            center={true}
            reverse={true}
            left={
              <ContentBlockText
                className='my-auto'
                header='How We Help'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque donec et neque ultrices etiam tristique. Lectus vitae velit tellus leo eget aliquam mauris amet. Amet, malesuada tincidunt pellentesque sit diam facilisis pulvinar laoreet. Vivamus porttitor pharetra id eget amet.'
              />
            }
            right={
              <Image
                src='/images/4-3_placeholder.jpg'
                alt='test'
                width={1200}
                height={900}
                layout='responsive'
              />
            }
          />
          <ContentBlockLeftRightOffset
            center={true}
            reverse={true}
            left={
              <ContentBlockText
                className='my-auto'
                header='Get Involved'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque donec et neque ultrices etiam tristique. Lectus vitae velit tellus leo eget aliquam mauris amet. Amet, malesuada tincidunt pellentesque sit diam facilisis pulvinar laoreet. Vivamus porttitor pharetra id eget amet.'
              />
            }
            right={
              <Image
                src='/images/4-3_placeholder.jpg'
                alt='test'
                width={1200}
                height={900}
                layout='responsive'
              />
            }
          />
        </Wrapper>

        <Wrapper className='bg-smoke'>
          <Grid className='pt-12 md:py-20 py-32' isCenter={true}>
            <div className='col-span-full lg:col-start-3 lg:col-span-8 space-y-8 text--body'>
              <h2 className='text--subheadline'>A message from our founding fathers</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim purus viverra tellus
                amet. Eu turpis et a lorem tortor. Molestie luctus ac eget at viverra in tortor,
                consequat. Mauris dis arcu quam mi, amet scelerisque condimentum pharetra purus. Non
                faucibus pellentesque at nisi mattis ullamcorper. Nunc sed nisl posuere praesent
                consequat sagittis. Cras aliquet vel curabitur massa. Cras odio pellentesque donec.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim purus viverra tellus
                amet. Eu turpis et a lorem tortor. Molestie luctus ac eget at viverra in tortor,
                consequat. Mauris dis arcu quam mi, amet scelerisque condimentum pharetra purus. Non
                faucibus pellentesque at nisi mattis ullamcorper. Nunc sed nisl posuere praesent
                consequat sagittis. Cras aliquet vel curabitur massa. Cras odio pellentesque donec.
              </p>
              <p className='pb-8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim purus viverra tellus
                amet. Eu turpis et a lorem tortor. Molestie luctus ac eget at viverra in tortor,
                consequat. Mauris dis arcu quam mi, amet scelerisque condimentum pharetra purus. Non
                faucibus pellentesque at nisi mattis ullamcorper. Nunc sed nisl posuere praesent
                consequat sagittis. Cras aliquet vel curabitur massa. Cras odio pellentesque donec.
              </p>
              <Image
                src='/images/4-3_placeholder.jpg'
                alt='test'
                width={1200}
                height={900}
                layout='responsive'
              />
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
export default Alumni;
