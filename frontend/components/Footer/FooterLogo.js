import Image from "next/legacy/image";
import PropTypes from "prop-types";
import Link from "next/link";
const FooterLogo = ({ src, alt, width, height }) => {
  return (
    <div className='col-span-4 place-self-center mt-14 sm:order-3 sm:col-span-3 md:order-3 md:col-span-3 xl:col-span-3 flex flex-col xl:mt-0'>
      <Link legacyBehavior={false} href='/' passHref>
        <Image src={src} alt={alt} width={width} height={height} />
      </Link>
      <Link
        legacyBehavior={false}
        href='/'
        className='mx-auto text-3xl font-bold mt-4 no-underline hover:no-underline'
      >
        <h4 className='no-underline'>ΨΧΩ</h4>
      </Link>
    </div>
  );
};

FooterLogo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default FooterLogo;
