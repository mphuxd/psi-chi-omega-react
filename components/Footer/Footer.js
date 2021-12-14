import FooterNav from "./FooterNav";
import FooterSignUp from "./FooterSignUp";
import PropTypes from "prop-types";
import Wrapper from "../Wrapper/Wrapper";
import Grid from "../Grid/Grid";
import FooterDescription from "./FooterDescription";
import FooterLogo from "./FooterLogo";
import FooterAttributes from "./FooterAttributes";

const Footer = ({ description, youtube, ig, facebook }) => {
  return (
    <Wrapper className='bg-midnight items-center'>
      <Grid className='mx-auto pt-12 sm:gap-x-4 sm:pt-16 md:gap-x-4 lg:pt-24 lg:gap-x-8 xl:pt-32 xl:gap-y-24 text-mist font-body'>
        <FooterDescription description={description} />
        <FooterNav />
        <FooterSignUp
          youtube={youtube}
          ig={ig}
          facebook={facebook}
          text='Subscribe to our newsletter to get the latest information on events, updates, and more.'
        />
        <FooterLogo
          src='/images/pco-crest.png'
          alt='Psi Chi Omega Crest'
          width={240}
          height={211}
        />
        <FooterAttributes
          className=''
          text='Copyright © 2021 Psi Chi Omega Fraternity ∙ GAMMA Chapter ∙ MPH AM S2K14 ∙ MBK'
        />
      </Grid>
    </Wrapper>
  );
};

Footer.propTypes = {
  description: PropTypes.string,
  youtube: PropTypes.string,
  ig: PropTypes.string,
  facebook: PropTypes.string,
};

export default Footer;
