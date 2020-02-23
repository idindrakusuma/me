import React from 'react';
import { arrayOf, object } from 'prop-types';
import { Link } from 'gatsby';

import { styWrapper } from './styles';

function Navbar({ listMenu }) {
  if (listMenu.length === 0) return null;

  return (
    <div css={styWrapper}>
      {listMenu.map((menu, index) => {
        return (
          <Link
            key={index}
            to={menu.href}
            title={menu.name}
            data-testid={menu.dataTestId?.mobile}
            activeClassName="active"
          >
            <menu.icon />
          </Link>
        );
      })}
    </div>
  );
}

Navbar.propTypes = {
  listMenu: arrayOf(object),
};

Navbar.defaultProps = {
  listMenu: [],
};

export default Navbar;
