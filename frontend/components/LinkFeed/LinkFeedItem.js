import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";

const LinkFeedItem = ({ title, caption, link }) => {
  return (
    <Link legacyBehavior={false} href={link} className='link-feed-item'>
      <div className='link-feed-item__body'>
        <span className='link-feed-item__header uppercase'>{title}</span>
        <span className='link-feed-item__caption uppercase'>{caption}</span>
      </div>
      <div className='link-feed-item__button'>
        <Image src='/images/icons/arrow_filled.svg' alt='Link Arrow' width={48} height={48} />
      </div>
    </Link>
  );
};

export default LinkFeedItem;
