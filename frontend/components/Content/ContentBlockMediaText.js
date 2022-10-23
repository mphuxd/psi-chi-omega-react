import ContentBlockMedia from "./ContentBlockMedia";
import ContentBlockBody from "./ContentBlockBody";
import ContentBlockText from "./ContentBlockText";
import LinkButton from "../Link/LinkButton";
import Image from "next/image";
import PropTypes from "prop-types";
import cx from "classnames";
import { useInView } from "react-intersection-observer";

const ContentBlockMediaText = ({
  className = "",
  isReversed,
  animateInView,
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  eyebrowLabel,
  header,
  text,
  linkHref,
  linkClassName,
  linkAlt,
  label,
  linkIsCenter,
}) => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  let classNames = cx(
    className,
    "content-block-quote",
    { "opacity-0": animateInView },
    {
      "animate__animated animate__fadeInUp opacity-100 animate--ease-out-quintic animate--duration-500ms":
        inView && animateInView,
    }
  );

  let imgClassName = cx("content-block-media", {
    "sm:order-2": isReversed,
    "sm:order-1": !isReversed,
  });

  let bodyClassName = cx("content-block-text", {
    "sm:order-1": isReversed,
    "sm:order-2": !isReversed,
  });

  let linkClassNames = cx(linkClassName, "mt-6");

  return (
    <div ref={ref} className={classNames}>
      <ContentBlockMedia noPaddingMobile={true} className={imgClassName}>
        <Image src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} layout='responsive' />
      </ContentBlockMedia>
      <ContentBlockBody className={bodyClassName}>
        <ContentBlockText className='' eyebrowLabel={eyebrowLabel} header={header} text={text} />
        <LinkButton
          className={linkClassNames}
          linkAlt={header}
          href={linkHref}
          alt={linkAlt}
          label={label}
          isCenter={linkIsCenter}
        />
      </ContentBlockBody>
    </div>
  );
};

ContentBlockMediaText.propType = {
  className: PropTypes.string,
  animateInView: PropTypes.bool,
  isReversed: PropTypes.bool,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number,
  eyebrowLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  header: PropTypes.string,
  text: PropTypes.string,
  linkHref: PropTypes.string,
  linkClassName: PropTypes.string,
  linkAlt: PropTypes.string,
  label: PropTypes.string,
  linkIsCenter: PropTypes.bool,
};

export default ContentBlockMediaText;
