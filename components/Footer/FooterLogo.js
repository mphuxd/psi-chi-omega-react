import Image from "next/image";
import PropTypes from "prop-types";

const FooterLogo = ({ src, alt, width, height }) => {
  return (
    <div className='col-start-2 col-span-2 place-self-center mt-14 sm:order-3 sm:col-span-3 md:order-3 md:col-span-3 xl:col-span-3 flex flex-col xl:mt-0'>
      <Image src={src} alt={alt} width={width} height={height} />

      <h5 className='mx-auto text-3xl font-bold mt-4'>ΨΧΩ</h5>
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
