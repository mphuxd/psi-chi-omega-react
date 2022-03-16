import React from "react";
import Link from "next/link";
import Image from "next/image";

const ContentBlockLinkFeedItem = ({ title, caption, link }) => {
  return (
    <Link href={link}>
      <a className='theme--grid_inner accordion--item relative py-4 md:py-6'>
        <div className='content-block--feed-item__body'>
          <span className='content-block--feed-item__header'>{title}</span>
          <span className='content-block--feed-item__caption my-auto'>{caption}</span>
        </div>
        <div className='col-span-1 self-center justify-self-center h-fit'>
          <Image src='/images/icons/arrow_filled.svg' alt='Link Arrow' width={48} height={48} />
        </div>
      </a>
    </Link>
  );
};

export default ContentBlockLinkFeedItem;
