import ContentBlockMedia from "./ContentBlockMedia";
import ContentBlockQuoteBody from "./ContentBlockQuoteBody";
import ContentBlockText from "./ContentBlockText";
import ContentBlockQuoteBodyAttributes from "./ContentBlockQuoteBodyAttributes";
import LinkButton from "../Link/LinkButton";
import Image from "next/image";
import PropTypes from "prop-types";
import cx from "classnames";
import { useInView } from "react-intersection-observer";

const ContentBlockQuote = ({
  className = "",
  isReversed,
  animateInView,
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  eyebrowLabel,
  header,
  quote,
  quoteAuthor,
  quoteAuthorSubtext,
  linkHref,
  linkClassName,
  linkAlt,
  label,
  linkIsCenter,
}) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0.5,
  });

  let classNames = cx(
    className,
    "content-block--quote",
    { "opacity-0": animateInView },
    {
      "animate__animated animate__fadeInUp opacity-100 animate--ease-out-quintic animate--duration-500ms": inView && animateInView,
    }
  );

  let imgClassName = cx("content-block--media", {
    "sm:order-2": isReversed,
    "sm:order-1": !isReversed,
  });

  let bodyClassName = cx("content-block--quote_body", {
    "sm:order-1": isReversed,
    "sm:order-2": !isReversed,
  });

  let linkClassNames = cx(linkClassName, "mt-6");

  return (
    <div ref={ref} className={classNames}>
      <ContentBlockMedia noPaddingMobile={true} className={imgClassName}>
        <Image src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} layout='responsive' />
      </ContentBlockMedia>
      <ContentBlockQuoteBody className={bodyClassName}>
        <ContentBlockText
          className='flex flex-col'
          eyebrowLabel={eyebrowLabel}
          header={header}
          text={quote}
        />
        <ContentBlockQuoteBodyAttributes
          className=''
          quoteAuthor={quoteAuthor}
          quoteAuthorSubtext={quoteAuthorSubtext}
        />
        <LinkButton
          className={linkClassNames}
          href={linkHref}
          alt={linkAlt}
          label={label}
          isCenter={linkIsCenter}
        />
      </ContentBlockQuoteBody>
    </div>
  );
};

ContentBlockQuote.propType = {
  className: PropTypes.string,
  isReversed: PropTypes.bool,
  animateInView: PropTypes.bool,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number,
  eyebrowLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  header: PropTypes.string,
  quote: PropTypes.string,
  quoteAuthor: PropTypes.string,
  quoteAuthorSubtext: PropTypes.string,
  linkHref: PropTypes.string,
  linkClassName: PropTypes.string,
  linkAlt: PropTypes.string,
  label: PropTypes.string,
  linkIsCenter: PropTypes.bool,
};

export default ContentBlockQuote;

//to-do - refactor using slot pattern
