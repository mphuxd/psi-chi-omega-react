import Head from "next/head";
import Wrapper from "../../components/Wrapper/Wrapper";
import Layout from "../../components/Layout";
import ContentBlockLinkFeed from "../../components/Content/ContentBlockLinkFeed";
import ContentBlockLinkFeedItem from "../../components/Content/ContentBlockLinkFeedItem";
import Grid from "../../components/Grid/Grid";

function Fraternity() {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>Join Psi Chi Omega | ΨΧΩ</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Wrapper></Wrapper>
      </Layout>
    </div>
  );
}
export default Fraternity;
