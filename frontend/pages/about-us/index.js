import Head from 'next/head';
import Image from "next/legacy/image";
import {
  Accordion,
  AccordionItem,
  Grid,
  Layout,
  Wrapper,
  SectionHeaderSplit,
  ContentBlockBody,
  ContentBlockLeftRight,
  ContentBlockMedia,
  ContentBlockMetricItem,
  ContentBlockMetrics,
  ContentBlockText,
  SectionHeaderSplitOffset,
  LeaderLarge,
  LinkButton,
  LinkFeed,
  LinkFeedItem,
  Meta,
} from '@/components';
import ReactMarkdown from 'react-markdown';
import { fetchAPI } from '../api/strapi';

export async function getStaticProps({ params }) {
  const aboutRes = await fetchAPI('/about-us', {
    populate: {
      '*': { populate: '*' },
      leader: { populate: '*' },
      sectionheader: { populate: '*' },
      metrics: {
        populate: '*',
      },
      content: { populate: '*' },
      culture: { populate: '*' },
      pillars: { populate: '*' },
      commitments: { populate: '*' },
      why: { populate: '*' },
    },
  });
  return {
    props: {
      leader: aboutRes.data.attributes.leader,
      sectionHeader: aboutRes.data.attributes.sectionheader,
      metrics: aboutRes.data.attributes.metrics,
      content: aboutRes.data.attributes.content,
      culture: aboutRes.data.attributes.culture,
      pillars: aboutRes.data.attributes.pillars,
      commitments: aboutRes.data.attributes.commitments,
      why: aboutRes.data.attributes.why,
    },
    revalidate: 1,
  };
}

function About({ leader, sectionHeader, metrics, content, culture, pillars, commitments, why }) {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>About Us | ΨΧΩ</title>
        <Meta
          description='Psi Chi Omega is an Asian-interest fraternity at UC Davis that provides students with cultural space and community to help them understand and connect with their Asian-American identity. '
          keywords='Psi, Chi, Omega, Psi Chi Omega, fraternity, Gamma, Chapter, UC Davis, California, Integrity, Perseverance, Eternal Brotherhood'
          url='/'
          title='About Us | ΨΧΩ'
          imgURL=''
          twitterHandle=''
        />
      </Head>

      <Layout>
        <LeaderLarge
          heading={leader.heading}
          largeCopy={leader.copy}
          copy1={
            <ReactMarkdown parserOptions={{ commonmark: true }}>{leader.subcopy}</ReactMarkdown>
          }
          imageSrc={leader.image.data.attributes.url}
          imageAlt={leader.image.data.attributes.alternativeText}
          imageWidth={leader.image.data.attributes.width}
          imageHeight={leader.image.data.attributes.height}
          priority={true}
        />

        <Wrapper className='my-12 md:my-20 lg:my-[144px]'>
          <Grid isCenter={true}>
            <SectionHeaderSplit
              leftText={
                <>
                  We’re a <span className='text-forest'>brotherhood.</span>
                </>
              }
              rightText={sectionHeader.right}
              divider={true}
              button={true}
              href={sectionHeader.href}
              alt={sectionHeader.linkAlt}
              label={sectionHeader.linkLabel}
            />
            <ContentBlockLeftRight
              className='mt-12 md:mt-20 lg:mt-24 lg:gap-x-8'
              left={
                <ContentBlockMedia className='lg:w-1/2'>
                  <Image
                    src={metrics.image.data.attributes.url}
                    alt={metrics.image.data.attributes.alternativeText}
                    width={metrics.image.data.attributes.width}
                    height={metrics.image.data.attributes.height}
                    layout='responsive'
                  />
                </ContentBlockMedia>
              }
              right={
                <ContentBlockMetrics className='mt-4 md:mt-6 lg:w-1/2 gap-4 space-y-4 md:space-y-2 lg:space-y-3'>
                  {metrics.metric.map((metric, i) => {
                    return (
                      <ContentBlockMetricItem
                        key={i}
                        metric={metric.metric}
                        caption={metric.caption}
                      />
                    );
                  })}
                </ContentBlockMetrics>
              }
            />
            <ContentBlockLeftRight
              className='flex-col-reverse my-12 md:mb-0 md:mt-20 lg:mt-24 lg:gap-x-8'
              left={
                <ContentBlockText
                  className='mt-4 px-2 md:px-0 md:mt-8 lg:w-1/2 lg:my-auto'
                  header={content.header}
                  text={content.body}
                />
              }
              right={
                <ContentBlockMedia className='lg:w-1/2'>
                  <Image
                    src={content.image.data.attributes.url}
                    alt={content.image.data.attributes.alternativeText}
                    width={content.image.data.attributes.width}
                    height={content.image.data.attributes.height}
                    layout='responsive'
                  />
                </ContentBlockMedia>
              }
            />
          </Grid>
        </Wrapper>

        <Wrapper className='bg-smoke pt-12 md:mt-20 lg:py-32'>
          <Grid isCenter={true}>
            <SectionHeaderSplit
              leftText={culture.sectionheader.left}
              rightText={culture.sectionheader.right}
              button={true}
              divider={true}
              href={culture.sectionheader.href}
              alt={culture.sectionheader.linkAlt}
              label={culture.sectionheader.linkLabel}
            />
            <Wrapper className='col-span-full mt-12 lg:mt-24'>
              <div>
                <Image
                  src={culture.image.data.attributes.url}
                  alt={culture.image.data.attributes.alternativeText}
                  width={culture.image.data.attributes.width}
                  height={culture.image.data.attributes.height}
                  layout='responsive'
                />
              </div>
            </Wrapper>
            <Wrapper className='col-span-full mt-20 lg:mt-28'>
              <SectionHeaderSplitOffset
                title={pillars.splitheader.left}
                body={pillars.splitheader.right}
                isUppercase={false}
              />
              <Accordion className='w-full relative mt-4 mb-20 accordion-item--end'>
                {pillars.pillar.map((pillar, i) => {
                  return (
                    <AccordionItem key={i} index={i} title={pillar.title} caption={pillar.caption}>
                      <div className='mt-4 lg:mt-0'>
                        <div className='mt-4 lg:mt-0'>{pillar.definition1}</div>
                        {pillar.definiton2 && <div className='mt-2'>{pillar.definiton2}</div>}
                      </div>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </Wrapper>
          </Grid>
        </Wrapper>
        <Wrapper className='pb-12 md:pb-20 lg:pb-32'>
          <Grid isCenter={true}>
            <ContentBlockLeftRight
              className='flex-col-reverse md:flex-col mt-20 md:gap-y-8 lg:mt-24 lg:gap-x-8'
              left={
                <ContentBlockBody className='mt-8 px-2 md:px-0 md:mt-0 lg:w-1/2 lg:my-auto flex flex-col'>
                  <ContentBlockText header={commitments.header} text={commitments.body} />
                  <LinkButton
                    className='mt-3 lg:mt-6'
                    href={commitments.href}
                    alt={commitments.linkAlt}
                    label={commitments.linkLabel}
                    isCenter={false}
                  />
                </ContentBlockBody>
              }
              right={
                <ContentBlockMedia noPaddingMobile={true} className='lg:w-1/2'>
                  <Image
                    src={commitments.image.data.attributes.url}
                    alt={commitments.image.data.attributes.alternativeText}
                    width={commitments.image.data.attributes.width}
                    height={commitments.image.data.attributes.height}
                    layout='responsive'
                  />
                </ContentBlockMedia>
              }
            />
            <ContentBlockLeftRight
              className='flex-col md:flex-col-reverse mt-20 md:gap-y-8 lg:mt-24 lg:gap-x-8'
              left={
                <ContentBlockMedia noPaddingMobile={true} className='lg:w-1/2'>
                  <Image
                    src={why.image.data.attributes.url}
                    alt={why.image.data.attributes.alternativeText}
                    width={why.image.data.attributes.width}
                    height={why.image.data.attributes.height}
                    layout='responsive'
                  />
                </ContentBlockMedia>
              }
              right={
                <ContentBlockBody className='mt-8 px-2 md:px-0 md:mt-0 lg:w-1/2 lg:my-auto flex flex-col'>
                  <ContentBlockText header={why.header} text={why.body} />
                  <LinkButton
                    className='mt-3 lg:mt-6'
                    href={why.href}
                    alt={why.linkAlt}
                    label={why.linkLabel}
                    isCenter={false}
                  />
                </ContentBlockBody>
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
                link='/join/fraternity'
              />
              <LinkFeedItem
                className=''
                title='Little Sis Program'
                caption='About Little Sis'
                link='/about-us/little-sis-program'
              />
              <LinkFeedItem
                className=''
                title='Alumni'
                caption='About our alumni network'
                link='/members/alumni'
              />
            </LinkFeed>
          </Grid>
        </Wrapper>
      </Layout>
    </div>
  );
}

export default About;
