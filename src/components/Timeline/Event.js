import React, { useMemo } from 'react';
import { string, node, bool } from 'prop-types';

import { icon, date, body, description, event, Badge } from './styles';

function Event({ title, subtitle, interval, children, showIcon, hideBadge, isPortofolio, isAward }) {
  const getText = useMemo(() => {
    if (isAward) return 'Award';
    if (isPortofolio) return 'Projects';

    return '';
  }, []);

  return (
    <li css={event}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      {showIcon && <label css={icon} htmlFor="title" />}
      <div css={body}>
        <p css={date}>{interval}</p>
        <h3 name="title">{title}</h3>
        {subtitle && (
          <h4>
            {!hideBadge && (
              <Badge isAward={isAward} isPortofolio={isPortofolio}>
                {getText}
              </Badge>
            )}{' '}
            {subtitle}
          </h4>
        )}
        <div css={description}>{children}</div>
      </div>
    </li>
  );
}

Event.propTypes = {
  title: string.isRequired,
  subtitle: string,
  showIcon: bool,
  interval: string.isRequired,
  children: node,
  hideBadge: bool,
  isAward: bool,
  isPortofolio: bool,
};

Event.defaultProps = {
  subtitle: '',
  showIcon: true,
  children: '',
  hideBadge: true,
  isAward: false,
  isPortofolio: false,
};

export default Event;
