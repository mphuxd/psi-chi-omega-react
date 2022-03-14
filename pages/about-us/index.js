import Head from "next/head";
import Grid from "../../components/Grid/Grid";
import Layout from "../../components/Layout";
import Wrapper from "../../components/Wrapper/Wrapper";
import Image from "next/image";
import SectionSplitHeader2 from "../../components/Heading/SectionSplitHeader2";
import ContentBlockLeftRight from "../../components/Content/ContentBlockLeftRight";
import ContentBlockMedia from "../../components/Content/ContentBlockMedia";
import ContentBlockMetrics from "../../components/Content/ContentBlockMetrics";
import ContentBlockMetricItem from "../../components/Content/ContentBlockMetricItem";
import ContentBlockText from "../../components/Content/ContentBlockText";
import SectionSplitHeaderOffset from "../../components/Heading/SectionSplitHeaderOffset";
import Accordion from "../../components/Accordion/Accordion";
import AccordionItem from "../../components/Accordion/AccordionItem";
import ContentBlockLinkFeed from "../../components/Content/ContentBlockLinkFeed";
import ContentBlockLinkFeedItem from "../../components/Content/ContentBlockLinkFeedItem";
import ContentBlockBody from "../../components/Content/ContentBlockBody";
import LinkButton from "../../components/Link/LinkButton";

function About() {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>Psi Chi Omega Fraternity</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Wrapper className='justify-center mt-24 md:mt-20 lg:mt-24'>
          <Grid className='mx-auto'>
            <h1 className='col-span-full text--headline xl:col-span-9 uppercase'>About ΨΧΩ</h1>
            <p className='col-span-full lg:col-span-9 md:text-3xl md:leading-9 lg:text-2xl lg:leading-8 mt-4 md:mt-8 text-base font-medium tracking-[3%] lg:font-medium'>
              Psi Chi Omega is an Asian-interest fraternity whose traditions promote excellence
              through integrity, perseverance, and eternal brotherhood. Through shared experiences,
              we form long-lasting bonds between our brothers and encourage each other to become the
              best version of themselves.
            </p>
            <section className='col-span-full gap-x-8 flex flex-col lg:flex-row xl:mt-10 mt-4 md:mt-8'>
              <div className='text-tiny md:text-lg md:leading-7 lg:text-base lg:leading-6 leading-5 lg:w-1/2'>
                <p>
                  We believe that male camaraderie is necessary in becoming well-rounded, successful
                  men. By uniting young, ambitious, like-minded men under our values, we’ve
                  successfully cultivated a growth-focused environment to help our members succeed
                  both academically and socially.
                </p>
                <p className='mt-4'>
                  Psi Chi Omega builds strong men. For many members, joining a fraternity is the
                  beginning of a lifelong service to community — learning what it means to be a
                  brother, how to take care of each other, look after one another, and make sure
                  everyone stays on track.
                </p>
              </div>
              <div className='mt-6 lg:mt-0 lg:w-1/2'>
                <Image
                  src='/images/berlin-trident.jpg'
                  width={2000}
                  height={1333}
                  priority
                  alt='About us placeholder'
                ></Image>
              </div>
            </section>
          </Grid>
        </Wrapper>

        <Wrapper className='mt-20 md:mt-20 lg:my-[144px]'>
          <Grid className='mx-auto'>
            <SectionSplitHeader2
              leftText={
                <>
                  We’re a <span className='text-forest'>brotherhood.</span>
                </>
              }
              rightText='Brothers keep each other accountable, lift them up in their time of need, and push each other forward. No one gets left behind.'
              href='/members/brothers'
              alt='Link to the brothers webpage'
              label='Meet the brothers'
            />
            <ContentBlockLeftRight
              className='mt-20 md:mt-8 lg:mt-24 lg:gap-x-8'
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
                <ContentBlockMetrics className='mt-4 md:mt-6 lg:w-1/2 gap-4'>
                  <ContentBlockMetricItem className='' metric='20' caption='active brothers' />
                  <ContentBlockMetricItem
                    className='mt-4 md:mt-0 lg:mt-3'
                    metric='35'
                    caption='active little sisters'
                  />
                  <ContentBlockMetricItem
                    className='mt-4 md:mt-2 lg:mt-3'
                    metric='713'
                    caption='total members ever'
                  />
                  <ContentBlockMetricItem
                    className='mt-4 md:mt-2 lg:mt-3'
                    metric='25'
                    caption='years old'
                  />
                </ContentBlockMetrics>
              }
            />
            <ContentBlockLeftRight
              className='flex-col-reverse my-20 lg:mt-24 lg:gap-x-8'
              left={
                <ContentBlockText
                  className='mt-4 px-2 md:px-0 md:mt-8 lg:w-1/2 lg:my-auto'
                  header='Our Chapters'
                  text='Founded in UCSD, Psi Chi Omega established six chapters in universities throughout California including UCR, UCD, UCSC, SJSU, and most recently, a new chapter at SFSU. '
                />
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

        <Wrapper className='bg-smoke pt-12 md:mt-20 lg:py-32'>
          <Grid className='mx-auto'>
            <SectionSplitHeader2
              leftText='A place to celebrate our culture and heritage'
              rightText='Psi Chi Omega was founded to help students connect through their shared identity, culture and experiences to discover what it means to be Asian American.'
              href='/'
              alt='Our History'
              label='Learn about our history'
            />
            <Wrapper className='col-span-full mt-12 lg:mt-24'>
              <Image
                src='/images/berlin-trident.jpg'
                alt='temp'
                width={2000}
                height={1333}
                layout='responsive'
              />
            </Wrapper>
            <Wrapper className='col-span-full mt-20 lg:mt-28'>
              <SectionSplitHeaderOffset
                title='OUR PILLARS'
                body='Pillars are the fundamental principles that serve as the foundation for our fraternity. They unite us together as a community, guide us as men to make good decisions, and help us live a life with meaning and purpose.'
              />
              <Accordion className='w-full relative mt-4 pb-20'>
                <AccordionItem title='Integrity' caption='in·teg·ri·ty'>
                  <div className='mt-4 lg:mt-0'>
                    1. the quality of being honest and having strong moral principles; moral
                    uprightness.
                  </div>
                  <div className='mt-2'>2. the state of being whole and undivided.</div>
                </AccordionItem>
                <AccordionItem title='Perseverance' caption='per·se·ver·ance'>
                  <div className='mt-4 lg:mt-0'>
                    1. persistence in doing something despite difficulty or delay in achieving
                    success.
                  </div>
                </AccordionItem>
                <AccordionItem title='Eternal Brotherhood' caption='eter·​nal broth·​er·​hood'>
                  <div className='mt-4 lg:mt-0'>
                    1. lasting or existing forever; without end or beginning;
                  </div>
                  <div className='mt-2'>
                    2. an association, society, or community of people linked by a common interest,
                    religion, or trade.
                  </div>
                </AccordionItem>
              </Accordion>
            </Wrapper>
          </Grid>
        </Wrapper>
        <Wrapper className='md:mt-20 lg:pt-[128px]'>
          <Grid className='md:mx-auto'>
            <ContentBlockLeftRight
              className='flex-col-reverse md:flex-col my-20 md:gap-y-8 md:mt-20 lg:mt-24 lg:gap-x-8'
              left={
                <ContentBlockBody className='mt-8 px-2 md:px-0 md:mt-0 lg:w-1/2 lg:my-auto flex flex-col'>
                  <ContentBlockText
                    header='Committed to our Community'
                    text='We fight by taking on hard topics: substance abuse, mental health awareness, AAPI hate, and more. '
                  />
                  <LinkButton
                    className='mt-3 lg:mt-6'
                    href='/'
                    alt='test'
                    label='Go Visit Page'
                    isCenter={false}
                  />
                </ContentBlockBody>
              }
              right={
                <ContentBlockMedia noPaddingMobile={true} className='lg:w-1/2'>
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
            <ContentBlockLeftRight
              className='flex-col md:flex-col-reverse my-20 md:gap-y-8 lg:mt-24 lg:gap-x-8'
              left={
                <ContentBlockMedia noPaddingMobile={true} className='lg:w-1/2'>
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
                <ContentBlockBody className='mt-8 px-2 md:px-0 md:mt-0 lg:w-1/2 lg:my-auto flex flex-col'>
                  <ContentBlockText
                    header='Why Psi Chi Omega'
                    text='Everyone has different reasons for joining, but we stay for the same reasons — the people, experiences, and memories. Read what our members, who were once in your shoes, have to say about us.'
                  />
                  <LinkButton
                    className='mt-3 lg:mt-6'
                    href='/'
                    alt='test'
                    label='Go Visit Page'
                    isCenter={false}
                  />
                </ContentBlockBody>
              }
            />
          </Grid>
        </Wrapper>
        <Wrapper className='py-12 md:py-20 lg:py-[128px]'>
          <Grid className='mx-auto'>
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
export default About;
