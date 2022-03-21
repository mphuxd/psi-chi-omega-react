import React from "react";
import PropTypes from "prop-types";
import Grid from "../Grid/Grid";
import FaqFilter from "./FaqFilter";
import FaqFilterMobileList from "./FaqFilterMobileList";
import FaqFilterMobileListItem from "./FaqFilterMobileListItem";
import FaqFilterDesktopListItem from "./FaqFilterDesktopListItem";
import FaqSearch from "./FaqSearch";
import FaqList from "./FaqList";
import FaqListItem from "./FaqListItem";
import { useState } from "react/cjs/react.development";
import cx from "classnames";

{
  /* State goes here onClick -> setState -> changes are.. setactivefilter, rerender list to show items with activefiltercategory */
}

function FaqContainer(props) {
  let className = cx({});
  const [isActive, setActive] = useState("all"); //set activeFilter

  function getType(type) {
    return type;
  }

  function handleClick(getType) {
    isActive = getType;
    setActive(isActive);
  }

  return (
    <Grid isCenter={true}>
      {/* <FaqSearch />  DELAY FEATURE RENDER PROP TO EXPOSE */}
      <section className='theme--grid_inner col-span-full mt-12 lg:mt-0'>
        <FaqFilter //
          mobileList={
            <FaqFilterMobileList>
              <FaqFilterMobileListItem
                label='All FAQs'
                onClick={handleClick}
                type='all'
                category={isActive}
              />
              <FaqFilterMobileListItem
                label='Pledging'
                onClick={handleClick}
                type='pledging'
                category={isActive}
              />
              <FaqFilterMobileListItem
                label='Little Sis'
                onClick={handleClick}
                type='sis'
                category={isActive}
              />
              <FaqFilterMobileListItem
                label='Fraternity'
                onClick={handleClick}
                type='fraternity'
                category={isActive}
              />
              {/* onClick reference category and useState to set active category */}
            </FaqFilterMobileList>
          }
          desktopList={
            <>
              <FaqFilterDesktopListItem
                label='All FAQs'
                onClick={handleClick}
                type='all'
                category={isActive}
              />
              <FaqFilterDesktopListItem
                label='Pledging'
                onClick={handleClick}
                type='pledging'
                category={isActive}
              />
              <FaqFilterDesktopListItem
                label='Little Sis'
                onClick={handleClick}
                type='sis'
                category={isActive}
              />
              <FaqFilterDesktopListItem
                label='Fraternity'
                onClick={handleClick}
                type='fraternity'
                category={isActive}
              />
            </>
          }
        />
        <FaqList category={isActive}>
          <FaqListItem
            category={isActive}
            type='pledging'
            question='What is rush week?'
            answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          />
          <FaqListItem
            category={isActive}
            type='pledging'
            question='What is “rushing?”'
            answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          />
          <FaqListItem
            category={isActive}
            type='pledging'
            question='How do I get a bid?'
            answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          />
          <FaqListItem
            category={isActive}
            type='pledging'
            question='Do I have to be a student at UC Davis?'
            answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          />
          <FaqListItem
            category={isActive}
            type='pledging'
            question='Is joining a fraternity expensive?”'
            answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          />
          <FaqListItem
            category={isActive}
            type='pledging'
            question='Can I join if I graduate this year?'
            answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          />
          <FaqListItem
            category={isActive}
            type='pledging'
            question='What is pledging?'
            answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          />
          <FaqListItem
            category={isActive}
            type='pledging'
            question='Can I leave the fraternity after I join?'
            answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          />
        </FaqList>
      </section>
    </Grid>
  );
}

FaqContainer.propTypes = {};

export default FaqContainer;
