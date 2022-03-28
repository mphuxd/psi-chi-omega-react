import React from "react";
import PropTypes from "prop-types";

const ContentEvent = ({ date, time, location, eventName, eventDescription }) => {
  return (
    <div className='flex flex-col col-span-full mx-2 sm:col-span-4 md:col-span-6 px-4 py-8 bg-mist mt-4 font-body xl:px-6 xl:py-12'>
      <span className='leading-6 font-semibold pt-1 md:font-semibold lg:leading-7 lg:text-lg lg:font-bold xl:text-xl '>
        {date}
      </span>
      <span className='leading-6 font-light pt-1 xl:text-lg xl:pt-2 '>{time}</span>
      <span className='leading-6 font-light pt-1 xl:text-lg xl:pt-2'>{location}</span>
      <h3 className='leading-6 text-lg font-bold mt-8 md:text-2xl md:leading-8 xl:text-4xl'>
        {eventName}
      </h3>
      <p className='leading-6 font-light mt-3 xl:w-11/12 lg:text-lg lg:leading-7 xl:mt-5'>
        {eventDescription}
      </p>
    </div>
  );
};

ContentEvent.propTypes = {
  date: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string,
  eventName: PropTypes.string,
  eventDescription: PropTypes.string,
};

export default ContentEvent;
