import LinkButton from "../Link/LinkButton";
import Link from "next/link";
import Image from "next/image";
import cx from "classnames";
import PropTypes from "prop-types";

const CardNoBody = ({
  className,
  srcImg,
  altImg,
  widthImg,
  heightImg,
  linkClassname,
  linkHref,
  linkAlt,
  label,
  linkIsCenter,
}) => {
  let classNames = cx("flex flex-col", className);
  return (
    <Link href={linkHref} passHref>
      <div className={classNames}>
        <Image src={srcImg} alt={altImg} width={widthImg} height={heightImg} layout='responsive' />
        <div className='flex flex-col justify-between p-4'>
          <LinkButton className={linkClassname} href={linkHref} alt={linkAlt} label={label} isCenter={linkIsCenter} />
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
  linkHref: PropTypes.string,
  linkAlt: PropTypes.string,
  label: PropTypes.string,
  linkIsCenter: PropTypes.bool,
};

export default CardNoBody;
