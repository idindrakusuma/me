import React from 'react';
import { number } from 'prop-types';

import Title from '@components/Title';
import { styWrapper, styOverlay, styContent, styDescription } from './styles';

function FunFacts({ projects, customers, hours, awards }) {
  return (
    <section css={styWrapper}>
      <div css={styContent}>
        <Title text="Fun Facts" light />
        <div css={styDescription}>
          <div>
            <h3>{`> ${projects} 🥳`}</h3>
            <span>Projects Completed</span>
          </div>
          <div>
            <h3>{`> ${customers} 😊`}</h3>
            <span>Happy Customers</span>
          </div>
          <div>
            <h3>{`> ${hours} 😎`}</h3>
            <span>Hours Worked</span>
          </div>
          <div>
            <h3>{`> ${awards} 🏆`}</h3>
            <span>Awards Won</span>
          </div>
        </div>
      </div>
      <div css={styOverlay} />
    </section>
  );
}

FunFacts.propTypes = {
  projects: number.isRequired,
  customers: number.isRequired,
  hours: number.isRequired,
  awards: number.isRequired,
};

export default FunFacts;
