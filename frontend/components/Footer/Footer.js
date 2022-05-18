import FooterNav from "./FooterNav";
import FooterSignUp from "./FooterSignUp";
import PropTypes from "prop-types";
import Wrapper from "../Wrapper/Wrapper";
import Grid from "../Grid/Grid";
import FooterDescription from "./FooterDescription";
import FooterLogo from "./FooterLogo";
import FooterAttributes from "./FooterAttributes";

const Footer = ({
  description,
  legal,
  logoSrc,
  logoAlt,
  logoWidth,
  logoHeight,
  signUpText,
  youtube,
  ig,
  facebook,
}) => {
  return (
    <Wrapper className='bg-midnight items-center'>
      <Grid className='mx-auto pt-12 sm:gap-x-4 sm:pt-16 md:gap-x-4 lg:pt-24 lg:gap-x-8 xl:pt-32 xl:gap-y-24 text-mist font-body'>
        <FooterDescription description={description} />
        <FooterNav />
        <FooterSignUp youtube={youtube} ig={ig} facebook={facebook} text={signUpText} />
        <FooterLogo src={logoSrc} alt={logoAlt} width={logoWidth} height={logoHeight} />
        <FooterAttributes className='' text={legal} />
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
