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
  linkIsUppercase,
}) => {
  let classNames = cx("card-no-body", className);
  return (
    <Link href={linkHref} passHref>
      <a className={classNames}>
        <Image src={srcImg} alt={altImg} width={widthImg} height={heightImg} layout='responsive' />
        <div className='flex flex-col justify-between p-4'>
          <LinkButton
            className={linkClassname}
            href={linkHref}
            alt={linkAlt}
            label={label}
            isCenter={linkIsCenter}
            isUppercase={linkIsUppercase}
            underline={true}
          />
        </div>
      </a>
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
