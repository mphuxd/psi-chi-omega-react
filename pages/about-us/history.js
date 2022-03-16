import Head from "next/head";
import Layout from "../../components/Layout";
import Wrapper from "../../components/Wrapper/Wrapper";
import Grid from "../../components/Grid/Grid";
import LeaderSimple from "../../components/Leader/LeaderSimple";
import Image from "next/image";
import ContentBlockHistory from "../../components/Content/ContentBlockHistory/ContentBlockHistory";
import HistoryBody from "../../components/Content/ContentBlockHistory/HistoryBody";
import HistoryMetricList from "../../components/Content/ContentBlockHistory/HistoryMetricList";
import HistoryMetricListItem from "../../components/Content/ContentBlockHistory/HistoryMetricListItem";
import ContentBlockLinkFeed from "../../components/Content/ContentBlockLinkFeed";
import ContentBlockLinkFeedItem from "../../components/Content/ContentBlockLinkFeedItem";

function History() {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>History | ΨΧΩ</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Wrapper className='justify-center'>
          <LeaderSimple
            heading='Psi Chi Omega History'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo'
          />
        </Wrapper>

        <Wrapper className='mt-12 md:mt-20  lg:pb-10'>
          <ContentBlockHistory
            heading='1992 - ALPHA CHAPTER FOUNDED PSI CHI OMEGA AT UCSD'
            imageSrc='/images/ucsd-campus.jpg'
            imageAlt='UCSD Building where founders created Psi Chi Omega'
            imageWidth={1100}
            imageHeight={811}
            layout='responsive'
            imageMetricList={
              <HistoryMetricList>
                <HistoryMetricListItem label='CHAPTER' metric='ALPHA CHAPTER' />
                <HistoryMetricListItem label='DATE ESTABLISHED' metric='JAN 24 1992' />
                <HistoryMetricListItem label='FOUNDING CLASS SIZE' metric='26 FOUNDING FATHERS' />
                <HistoryMetricListItem label='LOCATION' metric='SAN DIEGO, CA' />
                <HistoryMetricListItem label='UNIVERSITY' metric='UCSD' />
              </HistoryMetricList>
            }
            bodyObject={
              <HistoryBody>
                <p>
                  It all started rather casually in the University of California Price Center.
                  Brothers Rob, Hoai, Frank, Nick, Kim and Doug were engaged in an intense
                  discussion on the Greek Fraternity system and the role of Asian-Americans in this
                  complex network.{" "}
                </p>
                <p>
                  The focal point of the conversation dealt with the paradoxical need for
                  maintaining a unique <strong>Asian identity</strong>, while at the same time being
                  to acculturate into the already existing fraternal establishment.{" "}
                </p>
                <p>
                  The brothers concluded that an organization with an Asian-American emphasis, and
                  an outlook which understands the importance of <em>integration over isolation</em>
                  , could be successful in linking these two cultures.{" "}
                </p>
                <p>
                  Thus, from humble beginnings, the foundation of a unique Asian-American fraternity
                  was born.
                </p>
                <p>
                  On January 24, 1992, twenty-six ambitious founding fathers brought Psi Chi Omega
                  into existence. The Brothers of Psi Chi Omega have since been working to establish
                  traditions which promote excellence through <strong>integrity</strong>,{" "}
                  <strong>perseverance</strong>, and <strong>eternal brotherhood</strong>.{" "}
                </p>
                <p>
                  By providing opportunities to expand scholastic capabilities, enhance leadership
                  skills, and be involved in all cultures, the members of Psi Chi Omega strive to
                  achieve a better understanding of our unique, Asian-American Heritage.{" "}
                </p>
              </HistoryBody>
            }
          />
        </Wrapper>

        <Wrapper className='mt-12 md:mt-20  lg:pb-10'>
          <ContentBlockHistory
            heading='1995 - GAMMA CHAPTER ESTABLISHED AT UC DAVIS'
            imageSrc='/images/davis-mu.jpg'
            imageAlt='Memorial Union building at University of California, Davis where our founders met to discuss creating a fraternity.'
            imageWidth={1200}
            imageHeight={652}
            layout='responsive'
            imageMetricList={
              <HistoryMetricList>
                <HistoryMetricListItem label='CHAPTER' metric='GAMMA CHAPTER' />
                <HistoryMetricListItem label='DATE ESTABLISHED' metric='JAN 24 1997' />
                <HistoryMetricListItem label='FOUNDING CLASS SIZE' metric='13 FOUNDING FATHERS' />
                <HistoryMetricListItem label='LOCATION' metric='DAVIS, CA' />
                <HistoryMetricListItem label='UNIVERSITY' metric='UCD' />
              </HistoryMetricList>
            }
            bodyObject={
              <HistoryBody>
                <p>
                  During the Spring of 1995 a group of ambitious men at the University of
                  California, Davis assembled in the Mee Room of the Memorial Union to discuss the
                  possibilities of creating a new Asian-American fraternity.
                </p>
                <p>
                  Out of a long and arduous search emerged eleven strong-minded individuals who
                  gained a renewed sense of awareness about themselves and what they were looking
                  for in a fraternity. All the founders agreed that the{" "}
                  <em>fundamental principle of a fraternity is the unity found in brotherhood</em>.
                </p>
                <p>
                  With this desire, Psi Chi Omega became the ideal fraternity whose traditions
                  promote excellence through integrity, perseverance, and eternal brotherhood.
                  Strong inter-chapter relationships further strengthened the founders’
                  determination to become a part of Psi Chi Omega.
                </p>
                <p>
                  The founders of Gamma Colony accepted Psi Chi Omega’s bid to establish a new
                  fraternity at the University of California, Davis on February 20th, 1996 and was
                  ultimately chaptered on January 24th, 1997.
                </p>
                <p>
                  As our fraternity continues to grow, our devotion and uncompromising commitment to
                  brotherhood remains.
                </p>
              </HistoryBody>
            }
          />
        </Wrapper>

        <Wrapper className='mt-12 md:mt-20 lg:pb-10'>
          <ContentBlockHistory
            heading='2004 - GAMMA CHAPTER LITTLE SIS PROGRAM'
            imageSrc='/images/davis-bike-circle.jpg'
            imageAlt='UC Davis Bike Circle'
            imageWidth={1100}
            imageHeight={811}
            layout='responsive'
            imageMetricList={
              <HistoryMetricList>
                <HistoryMetricListItem label='DATE ESTABLISHED' metric='DEC 24 2004' />
                <HistoryMetricListItem label='FOUNDING CLASS SIZE' metric='14 FOUNDING SISTERS' />
                <HistoryMetricListItem label='LOCATION' metric='DAVIS, CA' />
                <HistoryMetricListItem label='UNIVERSITY' metric='UCD' />
              </HistoryMetricList>
            }
            bodyObject={
              <HistoryBody>
                <p>
                  After a long and arduous discussion of a little sister program and its role in Psi
                  Chi Omega, the brothers at the University of California, Davis, all agreed that a
                  little sister program would be beneficial to the fraternity.
                </p>
                <p>
                  It is the vision of the brothers that the little sister program would serve as a
                  social, service, and academic entity inside the fraternity that would allow young
                  open minded women to be part of the fraternity.
                </p>
                <p>
                  In the winter of 2004, Psi Chi Omega at UC Davis became the 3rd chapter to
                  introduce the Psi Chi Lil Sis program so young college women could experience the
                  Greek lifestyle without having to bear the full-time responsibilities of a
                  sorority sister.
                </p>
                <p>
                  Thus, from humble beginnings, the foundation of a unique Asian-American fraternity
                  was born.
                </p>
                <p>
                  However, the ultimate goal of the Lil Sis Program is to create an eternal bond of
                  friendship between the brothers and their little sisters.
                </p>
                <p>
                  In winter 2015, Psi Chi Omega little sis became their own organization and was
                  renamed as Panethnic Cultural Organization (PCO).
                </p>
              </HistoryBody>
            }
          />
        </Wrapper>

        <Wrapper className='py-12 md:py-20 lg:py-[128px]'>
          <Grid isCenter={true}>
            <ContentBlockLinkFeed>
              <ContentBlockLinkFeedItem
                className=''
                title='Our Commitments'
                caption='SEE HOW WE’RE GIVING BACK TO OUR COMMUNITY'
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
                title='WHY PSI CHI OMEGA'
                caption='READ WHY OUR MEMBERS LOVE PSI CHI OMEGA'
                link='/'
              />
            </ContentBlockLinkFeed>
          </Grid>
        </Wrapper>
      </Layout>
    </div>
  );
}
export default History;
