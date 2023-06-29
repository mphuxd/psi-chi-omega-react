import Head from 'next/head';
import { useState } from 'react';
import {
  Layout,
  Wrapper,
  LeaderSimple,
  FaqContainer,
  FaqFilter,
  FaqList,
  FaqListItem,
  Meta,
} from '@/components';

import { fetchAPI } from '../api/strapi';

export async function getStaticProps({ params }) {
  const faqRes = await fetchAPI('/faq', {
    populate: {
      '*': { populate: '*' },
      filterLabels: { populate: '*' },
      faq_questions: { populate: '*' },
    },
  });

  return {
    props: {
      faq: faqRes.data.attributes,
      filterLabels: faqRes.data.attributes.filterLabels,
      faqQuestions: faqRes.data.attributes.faq_questions.data,
    },
    revalidate: 1,
  };
}

function Faq({ faq, filterLabels, faqQuestions }) {
  let [isActive, setActive] = useState('All FAQs');
  const filterList = [];

  filterLabels.forEach((label) => filterList.push(label.label));

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
        />
      </Head>

      <Layout>
        <Wrapper>
          <LeaderSimple upperCase={false} heading={faq.heading} body={faq.body} />
        </Wrapper>

        <Wrapper className='mb-12 md:mb-20 lg:mb-32'>
          <FaqContainer>
            <FaqFilter list={filterList} onClick={handleClick} isActive={isActive} />
            <FaqList category={isActive}>
              {faqQuestions.map((question, i) => {
                if (isActive === 'All FAQs') {
                  return (
                    <FaqListItem
                      key={i}
                      category={isActive}
                      label={question.attributes.question.label}
                      question={question.attributes.question.question}
                      answer={question.attributes.question.answer}
                    />
                  );
                } else if (isActive === question.attributes.question.label) {
                  return (
                    <FaqListItem
                      key={i}
                      category={isActive}
                      label={question.attributes.question.label}
                      question={question.attributes.question.question}
                      answer={question.attributes.question.answer}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </FaqList>
          </FaqContainer>
        </Wrapper>
      </Layout>
    </div>
  );
}
export default Faq;
