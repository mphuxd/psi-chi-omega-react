import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

function HeaderName() {
  let classNames = "flex flex-col justify-center content-center z-10";

  return (
    <div className={classNames}>
      <Link className='mt-auto mb-auto' href='/'>
        <a>
          <Image src='/logo_black.svg' alt='Psi Chi Omega Logo' width={61} height={21} />
        </a>
      </Link>
    </div>
  );
}

HeaderName.propTypes = {
  isActive: PropTypes.bool,
};

export default HeaderName;
