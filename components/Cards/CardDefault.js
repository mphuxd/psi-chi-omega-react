import LinkButton from "../Link/LinkButton";
import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image";

const CardDefault = ({
  className,
  srcImg,
  altImg,
  widthImg,
  heightImg,
  heading,
  body,
  linkHref,
  linkAlt,
  linkLabel,
  linkClassName,
  linkIsCenter,
}) => {
  return (
    <div className={className}>
      <div className='sm:w-1/2 md:w-full'>
        <Image src={srcImg} alt={altImg} width={widthImg} height={heightImg} layout='responsive' />
      </div>
      <div className='flex flex-col h-60 sm:h-auto sm:w-1/2 md:w-full md:h-60 justify-between bg-mist 2xl:h-80 p-4'>
        <div>
          <h3 className='font-bold text-2xl font-body leading-8'>{heading}</h3>
          <p className='mt-3 font-body text-tiny font-light leading-5'>{body}</p>
        </div>
        <Link href={linkHref} passHref>
          <LinkButton
            className={linkClassName}
            alt={linkAlt}
            label={linkLabel}
            isCenter={linkIsCenter}
          />
        </Link>
      </div>
    </div>
  );
};

CardDefault.propTypes = {
  srcImg: PropTypes.string,
  altImg: PropTypes.string,
  heading: PropTypes.string,
  body: PropTypes.string,
  linkHref: PropTypes.string,
  linkAlt: PropTypes.string,
  linkLabel: PropTypes.string,
  className: PropTypes.string,
  linkClassName: PropTypes.string,
  linkIsCenter: PropTypes.bool,
};

export default CardDefault;

