import Head from "next/head";
import Layout from "../../components/Layout";
import Grid from "../../components/Grid/Grid";
import Wrapper from "../../components/Wrapper/Wrapper";
import Image from "next/image";
import SectionSplitHeader2 from "../../components/Heading/SectionSplitHeader2";
import ContentBlockLeftRight from "../../components/Content/ContentBlockLeftRight";
import ContentBlockMedia from "../../components/Content/ContentBlockMedia";
import ContentBlockText from "../../components/Content/ContentBlockText";
import ContentBlockBody from "../../components/Content/ContentBlockBody";
import LinkButton from "../../components/Link/LinkButton";
import ContentBlockLinkFeedItem from "../../components/Content/ContentBlockLinkFeedItem";
import Link from "next/link";
import ContentBlockLinkFeed from "../../components/Content/ContentBlockLinkFeed";
import Gallery from "../../components/Gallery/Gallery";
import GalleryItemDefault from "../../components/Gallery/GalleryItemDefault";
import GalleryItemLarge from "../../components/Gallery/GalleryItemLarge";

function LittleSisProgram() {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>About Little Sis | ΨΧΩ</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Wrapper className='justify-center mt-24 md:mt-20 lg:mt-24'>
          <Grid isCenter={true}>
            <h1 className='col-span-full text--headline xl:col-span-9 uppercase'>
              Little Sister Program
            </h1>
            <p className='col-span-full lg:col-span-9 mt-4 md:mt-8 text--body'>
              Little sis is an organization for women within the Psi Chi Omega fraternity. It was
              created to officially invite college women into Psi Chi Omega and their greek social
              space. After a decade of little sisters, it was recognized by UC Davis as it’s own
              independent organization. These women continue to be an integral part of the Psi Chi
              Omega family.
            </p>
            <div className='col-span-full xl:mt-10 mt-4 md:mt-8'>
              <Image
                src='/images/berlin-trident.jpg'
                alt='Psi Chi Little Sisters'
                width={2000}
                height={1333}
              />
            </div>
          </Grid>
        </Wrapper>

        <Wrapper className='mt-20 md:mt-20 lg:my-[144px]'>
          <Grid isCenter={true}>
            <SectionSplitHeader2
              leftText={
                <>
                  A place that feels like <span className='text-red-800'>home.</span>
                </>
              }
              rightText='When we designed the little sis program, we envisioned a safe, secure environment not only where women can bond and connect among themselves, but also where they can rely and depend on our brothers for support. '
            />
            <ContentBlockLeftRight
              className='flex-col my-20 lg:mt-24 lg:gap-x-8'
              left={
                <ContentBlockMedia className='lg:w-1/2'>
                  <Image
                    src='/images/berlin-trident.jpg'
                    alt='temp'
                    width={2000}
                    height={1333}
                    layout='responsive'
                  />
                </ContentBlockMedia>
              }
              right={
                <ContentBlockBody className='mt-4 md:mt-8 px-2 md:px-0 lg:w-1/2 lg:my-auto'>
                  <ContentBlockText
                    header='Our Roots'
                    text={
                      <>
                        <p>
                          In the winter of 2004, Psi Chi Omega at UC Davis became the 3rd chapter to
                          introduce the Psi Chi Lil Sis program so young college women could
                          experience the Greek lifestyle without having to bear the full-time
                          responsibilities of a sorority sister.
                        </p>
                        <p className='mt-8'>
                          In winter 2015, Psi Chi Omega little sis became their own organization and
                          was renamed as Panethnic Cultural Organization (PCO).
                        </p>{" "}
                      </>
                    }
                  />
                  <LinkButton
                    className='mt-3 md:mt-6 lg:mt-6'
                    href='/'
                    alt='test'
                    label='Go Visit Page'
                    isCenter={false}
                  />
                </ContentBlockBody>
              }
            />

            <ContentBlockLeftRight
              className='flex-col-reverse my-20 lg:mt-24 lg:gap-x-8'
              left={
                <div className='w-full max-w-xl lg:w-1/2 mt-4 lg:my-auto'>
                  <div>
                    <h3 className='font-semibold text-lg'>FAMILY</h3>
                    <p className='mt-2'>
                      We welcome every new little sister into the organization by matching them with
                      a big bro and big sis. After joining, you’ll have opportunities to become a
                      big sis and pick your own littles too.
                    </p>
                  </div>
                  <div className='mt-4'>
                    <h3 className='font-semibold text-lg'>FREEDOM</h3>
                    <p className='mt-2'>
                      Little sisters are free to enjoy the benefits of greek life without the
                      typical obligations of a fraternity member. Our little sisters are often
                      members of sororities or other professional fraternities as well.
                    </p>
                  </div>
                </div>
              }
              right={
                <ContentBlockMedia className='lg:w-1/2'>
                  <Image
                    src='/images/berlin-trident.jpg'
                    alt='temp'
                    width={2000}
                    height={1333}
                    layout='responsive'
                  />
                </ContentBlockMedia>
              }
            />
          </Grid>
        </Wrapper>

        <Wrapper className='mt-20 md:mt-20 lg:my-[144px]'>
          <Grid isCenter={true}>
            <div className='col-span-full'>
              <Image
                src='/images/stock-girls.jpg'
                alt='Little Sisters'
                width={6024}
                height={4024}
              />
              <Link href='/'>
                <a className='theme--grid_inner relative py-4 md:py-6'>
                  <div className='content-block--feed-item__body'>
                    <span className='content-block--feed-item__header'>Join Little Sis</span>
                    <span className='content-block--feed-item__caption my-auto lg:col-span-5 lg:leading-6'>
                      Interested in joining? Learn how to apply and become a part of our community.
                    </span>
                  </div>
                  <div className='col-span-1 self-center justify-self-center h-fit'>
                    <Image
                      src='/images/icons/arrow_filled.svg'
                      alt='Link Arrow'
                      width={48}
                      height={48}
                    />
                  </div>
                </a>
              </Link>
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

        <Wrapper className='py-12 md:py-20 lg:py-[128px] bg-midnight'>
          <Grid isCenter={true}>
            <Gallery>
              <GalleryItemLarge
                src='/images/4-3_placeholder.jpg'
                alt='test'
                width={1200}
                height={900}
                layout='fill'
              />
              <GalleryItemDefault
                src='/images/4-3_placeholder.jpg'
                alt='test'
                width={1200}
                height={900}
                layout='responsive'
              />
              <GalleryItemDefault
                src='/images/4-3_placeholder.jpg'
                alt='test'
                width={1200}
                height={900}
                layout='responsive'
              />
              <GalleryItemDefault
                src='/images/4-3_placeholder.jpg'
                alt='test'
                width={1200}
                height={900}
                layout='responsive'
              />
              <GalleryItemDefault
                src='/images/4-3_placeholder.jpg'
                alt='test'
                width={1200}
                height={900}
                layout='responsive'
              />
              <GalleryItemDefault
                src='/images/4-3_placeholder.jpg'
                alt='test'
                width={1200}
                height={900}
                layout='responsive'
              />
              <GalleryItemDefault
                src='/images/4-3_placeholder.jpg'
                alt='test'
                width={1200}
                height={900}
                layout='responsive'
              />
            </Gallery>
          </Grid>
        </Wrapper>
      </Layout>
    </div>
  );
}
export default LittleSisProgram;
