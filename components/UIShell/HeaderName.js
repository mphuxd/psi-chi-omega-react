import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

export const HeaderName = ({ isActive }) => {
  let isWhite = isActive ? "/logo_white.svg" : "/logo_black.svg";
  let classNames = "flex flex-col justify-center content-center z-40";

  return (
    <div className={classNames}>
      <Link className='mt-auto mb-auto' href='/'>
        <a>
          <Image src={isWhite} alt='Psi Chi Omega Logo' width={61} height={21} />
        </a>
      </Link>
    </div>
  );
};

HeaderName.propTypes = {
  isActive: PropTypes.bool,
};

export default HeaderName;
