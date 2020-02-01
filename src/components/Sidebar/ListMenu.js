import React from 'react';
import { object, arrayOf } from 'prop-types';
import { Link } from 'gatsby';

import { navigation } from './styles';

function Menus({ listMenu }) {
  if (!listMenu) {
    return null;
  }

  return (
    <div css={navigation}>
      <ul>
        {listMenu.map((menu, index) => (
          <li key={index}>
            <Link to={menu.href} title={menu.name} activeClassName="active">
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

Menus.propTypes = {
  listMenu: arrayOf(object),
};

Menus.defaultProps = {
  listMenu: [],
};

export default Menus;
