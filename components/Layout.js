import Meta from "../components/Meta";
import HeaderDefault from "./UIShell/HeaderDefault";
import Wrapper from "./Wrapper/Wrapper";
import Grid from "./Grid/Grid";
import Footer from "./Footer/Footer";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <HeaderDefault />
      <div className='min-h-screen'>
        <main>{children}</main>
      </div>

      <Wrapper className='bg-midnight mt-12 items-center'>
        <Grid className='mx-auto pt-12 sm:gap-x-4 md:gap-x-4 lg:gap-x-8 xl:pt-32 xl:gap-y-24 text-mist font-body'>
          <Footer
            description='Psi Chi Omega offers our members the tools, guidance, and environment that allow our members create meaningful, longlasting experiences, memories, and relationships.'
            youtube='/'
            ig='/'
            facebook='/'
          />
        </Grid>
      </Wrapper>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
