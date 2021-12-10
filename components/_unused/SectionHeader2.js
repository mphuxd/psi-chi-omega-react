import Link from "next/link";
import LinkButton from "../Link/LinkButton";
LinkButton



const SectionHeader2 = ({ header, body, linkHref, linkAlt, label, linkIsCenter }) => {
  return (
    <div>
      <h2 className='font-body font-bold text-2xl text-center sm:text-3xl md:text-5xl'>{header}</h2>
      <p className='text-center font-body text-tiny font-light leading-5 mt-4 md:text-lg md:leading-7'>
        {body}
      </p>
      <Link href={linkHref} passHref>
        <LinkButton alt={linkAlt} label={label} isCenter={linkIsCenter} />
      </Link>
    </div>
  );
};

export default SectionHeader2;

