import Head from "next/head";
import { useState } from "react";
import {
  Layout,
  Wrapper,
  LeaderSimple,
  FaqContainer,
  FaqFilter,
  FaqList,
  FaqListItem,
  Meta,
} from "@/components";

import { fetchAPI } from "../api/strapi";

// export async function getStaticProps({ params }) {
//   const faqRes = await fetchAPI("/faq", {
//     populate: {
//       "*": { populate: "*" },
//       filterLabels: { populate: "*" },
//       faq_questions: { populate: "*" },
//     },
//   });

//   return {
//     props: {
//       faq: faqRes.data,
//       filterLabels: faqRes.data.attributes.filterLabels,
//       faq_questions: faqRes.data.attributes.faq_questions,
//     },
//     revalidate: 1,
//   };
// }

function Faq() {
  let [isActive, setActive] = useState("All FAQs");
  const filterList = ["All FAQs", "Pledging", "Little Sis", "Fraternity"];

  function getLabel(label) {
    return label;
  }

  function handleClick(getLabel) {
    isActive = getLabel;
    setActive(isActive);
  }

  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>FAQ | ΨΧΩ</title>
        <Meta
          description='Psi Chi Omega is an Asian-interest fraternity at UC Davis that provides students with cultural space and community to help them understand and connect with their Asian-American identity. '
          keywords='Psi, Chi, Omega, Psi Chi Omega, fraternity, Gamma, Chapter, UC Davis, California, Integrity, Perseverance, Eternal Brotherhood'
          url='/'
          title='FAQ | ΨΧΩ'
          imgURL=''
          twitterHandle=''
          faviconHref='/favicon.ico'
        />
      </Head>

      <Layout>
        <Wrapper>
          <LeaderSimple
            upperCase={false}
            heading='Frequently Asked Questions'
            body='Joining a fraternity can be an overwhelming experience. If you have questions, we’ll do our best to answer them here. If you don’t see your question, feel free to reach out to any of our members or contact us. '
          />
        </Wrapper>

        <Wrapper className='mb-12 md:mb-20 lg:mb-32'>
          <FaqContainer>
            <FaqFilter list={filterList} onClick={handleClick} isActive={isActive} />
            <FaqList category={isActive}>
              <FaqListItem
                category={isActive}
                label='Pledging'
                question='What is rush week?'
                answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              />
              <FaqListItem
                category={isActive}
                label='Pledging'
                question='What is “rushing?”'
                answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              />
              <FaqListItem
                category={isActive}
                label='Pledging'
                question='How do I get a bid?'
                answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              />
              <FaqListItem
                category={isActive}
                label='Pledging'
                question='Do I have to be a student at UC Davis?'
                answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              />
              <FaqListItem
                category={isActive}
                label='Pledging'
                question='Is joining a fraternity expensive?”'
                answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              />
              <FaqListItem
                category={isActive}
                label='Pledging'
                question='Can I join if I graduate this year?'
                answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              />
              <FaqListItem
                category={isActive}
                label='Pledging'
                question='What is pledging?'
                answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              />
              <FaqListItem
                category={isActive}
                label='Pledging'
                question='Can I leave the fraternity after I join?'
                answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              />
            </FaqList>
          </FaqContainer>
        </Wrapper>
      </Layout>
    </div>
  );
}
export default Faq;
