import React from 'react';
import { string, node, bool } from 'prop-types';

import { icon, date, body, description, event } from './styles';

function Event({ title, subtitle, interval, children, showIcon }) {
  return (
    <li css={event}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      {showIcon && <label css={icon} htmlFor="title" />}
      <div css={body}>
        <p css={date}>{interval}</p>
        <h3 name="title">{title}</h3>
        {subtitle && <h4>{subtitle}</h4>}
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
};

Event.defaultProps = {
  subtitle: '',
  showIcon: true,
  children: '',
};

export default Event;
