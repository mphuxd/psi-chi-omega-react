import React from "react";
import Link from "next/link";

const ContentBlockLinkFeedItem = ({ title, caption, link }) => {
  return (
    <Link href={link}>
      <a className="flex flex-row justify-between relative py-4 md:py-6 lg:mt-0 items-center">
          <div className='inline-flex flex-col col-span-3 accordion--item'>
            <span className='uppercase font-body text-lg leading-6 font-bold sm:text-2xl md:text-2xl md:leading-tight md:font-bold xl:text-3xl xl:font-bold xl:leading-tight'>{title}</span>
            <span className="uppercase text--caption mt-2">{caption}</span>
          </div>
          <div>link</div>
      </a>
    </Link>
  );
};

export default ContentBlockLinkFeedItem;