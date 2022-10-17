import Link from "next/link";
import Image from "next/image";
import cx from "classnames";
import PropTypes from "prop-types";

const CardNoBody = ({ className, srcImg, altImg, widthImg, heightImg, linkHref, label }) => {
  let classNames = cx("card-no-body", className);
  return (
    <Link legacyBehavior={false} className={classNames} href={linkHref} passHref>
      <Image src={srcImg} alt={altImg} width={widthImg} height={heightImg} layout='responsive' />
      <div className='flex flex-col justify-between p-4'>
        <div className='link--button'>
          <Image src='/link-arrow.svg' width={48} height={48} alt='Arrow' />
          <span className='text--button my-auto'>{label}</span>
        </div>
      </div>
    </Link>
  );
};

CardNoBody.propTypes = {
  className: PropTypes.string,
  srcImg: PropTypes.string,
  altImg: PropTypes.string,
  widthImg: PropTypes.number,
  heightImg: PropTypes.number,
  linkClassname: PropTypes.string,
  linkHref: PropTypes.string,
  linkAlt: PropTypes.string,
  label: PropTypes.string,
  linkIsCenter: PropTypes.bool,
  linkIsUppercase: PropTypes.bool,
};

export default CardNoBody;
