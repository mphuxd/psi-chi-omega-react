import Head from "next/head";
import Image from "next/image";
import {
  Wrapper,
  Layout,
  Grid,
  LeaderSimpleMedia,
  ContentBlockText,
  LinkFeed,
  LinkFeedItem,
  ContentBlockLeftRightOffset,
  ContentBlockLogoGrid,
  ContentBlockLogoGridItem,
  Meta,
} from "@/components";

function Alumni() {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>Alumni | ΨΧΩ</title>
        <Meta
          description='Psi Chi Omega is an Asian-interest fraternity at UC Davis that provides students with cultural space and community to help them understand and connect with their Asian-American identity. '
          keywords='Psi, Chi, Omega, Psi Chi Omega, fraternity, Gamma, Chapter, UC Davis, California, Integrity, Perseverance, Eternal Brotherhood'
          url='/'
          title='Alumni | ΨΧΩ'
          imgURL=''
          twitterHandle=''
          faviconHref='/favicon.ico'
        />
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

        <Wrapper className='mt-24 md:mt-20 lg:mt-0 pb-20 lg:pb-32 gap-y-16 md:gap-y-24 lg:gap-y-32'>
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
              <ContentBlockLogoGrid>
                <ContentBlockLogoGridItem
                  src='/images/4-3_placeholder.jpg'
                  alt='placeholder'
                  width={1200}
                  height={900}
                />
                <ContentBlockLogoGridItem
                  src='/images/4-3_placeholder.jpg'
                  alt='placeholder'
                  width={1200}
                  height={900}
                />
                <ContentBlockLogoGridItem
                  src='/images/4-3_placeholder.jpg'
                  alt='placeholder'
                  width={1200}
                  height={900}
                />
                <ContentBlockLogoGridItem
                  src='/images/4-3_placeholder.jpg'
                  alt='placeholder'
                  width={1200}
                  height={900}
                />

                <ContentBlockLogoGridItem
                  src='/images/4-3_placeholder.jpg'
                  alt='placeholder'
                  width={1200}
                  height={900}
                />

                <ContentBlockLogoGridItem
                  src='/images/4-3_placeholder.jpg'
                  alt='placeholder'
                  width={1200}
                  height={900}
                />

                <ContentBlockLogoGridItem
                  src='/images/4-3_placeholder.jpg'
                  alt='placeholder'
                  width={1200}
                  height={900}
                />

                <ContentBlockLogoGridItem
                  src='/images/4-3_placeholder.jpg'
                  alt='placeholder'
                  width={1200}
                  height={900}
                />

                <ContentBlockLogoGridItem
                  src='/images/4-3_placeholder.jpg'
                  alt='placeholder'
                  width={1200}
                  height={900}
                />
              </ContentBlockLogoGrid>
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
          <Grid className='pt-12 md:py-20 lg:py-40' isCenter={true}>
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
            <LinkFeed>
              <LinkFeedItem
                className=''
                title='Join Psi Chi Omega'
                caption='Become a brother'
                link='/'
              />
              <LinkFeedItem
                className=''
                title='Little Sis Program'
                caption='About Little Sis'
                link='/'
              />
              <LinkFeedItem
                className=''
                title='Alumni'
                caption='About our alumni network'
                link='/'
              />
            </LinkFeed>
          </Grid>
        </Wrapper>
      </Layout>
    </div>
  );
}
export default Alumni;
