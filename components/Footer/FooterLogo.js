import Image from "next/image";
import PropTypes from "prop-types";
import Link from "next/link";
const FooterLogo = ({ src, alt, width, height }) => {
  return (
    <div className='col-span-2 place-self-center mt-14 sm:order-3 sm:col-span-3 md:order-3 md:col-span-3 xl:col-span-3 flex flex-col xl:mt-0'>
      <Link href='/' passHref>
        <a>
          <Image src={src} alt={alt} width={width} height={height} />
        </a>
      </Link>
      <Link href='/' passHref>
        <a className='mx-auto text-3xl font-bold mt-4 no-underline hover:no-underline'>
          <h4 className="no-underline">ΨΧΩ</h4>
        </a>
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
