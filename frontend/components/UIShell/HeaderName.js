import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

function HeaderName() {
  let classNames = "flex flex-col justify-center content-center z-10";

  return (
    <Link aria-label="Psi Chi Omega Home. Psi Chi Omega Logo" legacyBehavior={false} className='header-logo' href='/'>
      <Image src='/logo_black.svg' alt='Psi Chi Omega Logo' width={61} height={21} />
    </Link>
  );
}

HeaderName.propTypes = {
  isActive: PropTypes.bool,
};

export default HeaderName;
