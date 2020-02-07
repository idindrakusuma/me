import React, { useRef, useEffect } from 'react';
import { node, number } from 'prop-types';
import canUseDom from '@helpers/canUseDom';

import { styWrapper } from '../styles';
import { ITEM_ID } from '../constants';

const DEFAULT_TIMER = 3000;

function Carousel({ children, delay }) {
  const activeItem = useRef(0);
  const shouldRunningSlide = useRef(false);

  const handleShowItem = () => {
    /**
     * If the situation not support DOM, do nothing!;
     * or IF the shouldRunningSlide false, do nothing too!
     */
    if (!canUseDom || !shouldRunningSlide.current) return undefined;
    /**
     * IF support dom, do calculation
     */
    const currentActiveItem = activeItem.current;
    const items = document.getElementsByClassName(ITEM_ID);

    if (items.length === 0) return undefined;

    for (let i = 0; i < items.length; i += 1) {
      items[i].style.display = 'none';
    }

    activeItem.current = currentActiveItem + 1;
    if (activeItem.current > items.length) {
      activeItem.current = 1;
    }

    items[activeItem.current - 1].style.display = 'block';
    /**
     * Should call show item again?
     */
    if (shouldRunningSlide.current) {
      setTimeout(() => {
        handleShowItem();
      }, delay);
    }

    return undefined;
  };

  const handleFreezeItem = (isRunning = false) => {
    shouldRunningSlide.current = isRunning;
    /**
     * IF Running, then show the next item!
     */
    if (isRunning) {
      setTimeout(() => {
        handleShowItem();
      }, delay);
    }
  };

  /**
   * Run Effect to trigger slide function
   * and DON'T forget to set flag `shouldRunningSlide: false` when will unmount component
   */
  useEffect(() => {
    if (!shouldRunningSlide.current) {
      shouldRunningSlide.current = true;
      handleShowItem();
    }

    return () => {
      shouldRunningSlide.current = false;
    };
  }, []);

  return (
    <div css={styWrapper}>
      <div onMouseOver={() => handleFreezeItem()} onMouseLeave={() => handleFreezeItem(true)}>
        {children}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  children: node.isRequired,
  delay: number,
};

Carousel.defaultProps = {
  delay: DEFAULT_TIMER,
};

export default Carousel;
