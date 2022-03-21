import Head from "next/head";
import Layout from "../../components/Layout";
import Wrapper from "../../components/Wrapper/Wrapper";
import Image from "next/image";
import Grid from "../../components/Grid/Grid";
import LeaderSimple from "../../components/Leader/LeaderSimple";
import FaqContainer from "../../components/Faq/FaqContainer";

function Faq() {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>FAQ | ΨΧΩ</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Wrapper>
          <LeaderSimple
            upperCase={false}
            heading='Frequently Asked Questions'
            body='Joining a fraternity can be an overwhelming experience. If you have questions, we’ll do our best to answer them here. If you don’t see your question, feel free to reach out to any of our members or contact us. '
          />
        </Wrapper>

        <Wrapper className="mb-12 md:mb-20 lg:mb-32">
          <FaqContainer />
        </Wrapper>
      </Layout>
    </div>
  );
}
export default Faq;

//notes
//interaction between search and filter
//search supercedes filters and will search all items and therefore reset filter
//best route..
//no interaction
//predefined and independent, search searches all.
//catergory filters all indepedent of search words
//is search necessary? how many questions will we have?
//search might be removed..
//catergorization
//probably necessary
//allow to search by topic
//topics
//how should we organize questions
//relevance & most popular
