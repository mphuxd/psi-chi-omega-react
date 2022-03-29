import Head from "next/head";
import {
  Layout,
  Wrapper,
  Grid,
  ContentBlockCenteredText,
  LinkFeed,
  LinkFeedItem,
  LeaderSimpleMedia,
  Meta,
} from "@/components";

function Why(props) {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>Why Psi Chi Omega | ΨΧΩ</title>
        <Meta
          description='Psi Chi Omega is an Asian-interest fraternity at UC Davis that provides students with cultural space and community to help them understand and connect with their Asian-American identity. '
          keywords='Psi, Chi, Omega, Psi Chi Omega, fraternity, Gamma, Chapter, UC Davis, California, Integrity, Perseverance, Eternal Brotherhood'
          url='/'
          title='Why Psi Chi Omega | ΨΧΩ'
          imgURL=''
          twitterHandle=''
          faviconHref='/favicon.ico'
        />
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

        <Wrapper className='pt-8 lg:pt-0 pb-12 sm:pb-8 md:pb-16 lg:pb-20'>
          <Grid className='mx-auto space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-32 '>
            <ContentBlockCenteredText
              heading='The People'
              body={
                <>
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
                </>
              }
            />

            <ContentBlockCenteredText
              heading='The People'
              body={
                <>
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
                </>
              }
            />

            <ContentBlockCenteredText
              heading='The People'
              body={
                <>
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
                </>
              }
            />
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

export default Why;
