import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero/Hero";
import HeroTitle from "../components/Hero/HeroTitle";
import HeroImage from "../components/Hero/HeroImage";
import HeroSubText from "../components/Hero/HeroSubText";
import HeroSubtitle from "../components/Hero/HeroSubtitle";
import HeroMediaControl from "../components/Hero/HeroMediaControl";
import ContentHeader from "../components/Content/ContentHeader";
import ContentLink from "../components/Content/ContentLink";
import ContentBody from "../components/Content/ContentBody";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Psi Chi Omega Fraternity</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Hero>
          <HeroTitle>Psi Chi Omega</HeroTitle>
          <HeroSubtitle>Fraternity</HeroSubtitle>
          <HeroImage src='images/placeholder.jpg'></HeroImage>
          <HeroSubText>INTEGRITY ∙ PERSERVERANCE ∙ ETERNAL BROTHERHOOD</HeroSubText>
          <HeroSubText> Gamma Chapter ∙ University of California, Davis</HeroSubText>
          <HeroMediaControl/>
        </Hero>
        <section className='flex flex-col justify-center ml-2 mr-2 mt-32'>
          <ContentHeader>About us</ContentHeader>
          <ContentBody>Founded in 1992 at UCSD, Psi Chi Omega is one of the most competitive and fastest growing Asian-American social fraternities in California. Our traditions, values, and community guide our members towards excellence in their pursuit to become leaders, fighters, and givers for their community.</ContentBody>
          <ContentLink src=''>Learn More</ContentLink>
        </section>



      </Layout>
    </div>
  );
}
