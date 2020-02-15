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
            <h3 data-testid="ffTitlePro">{`> ${projects}`}</h3>
            <span data-testid="ffSubPro">Projects Completed</span>
          </div>
          <div>
            <h3 data-testid="ffTitleCus">{`> ${customers}`}</h3>
            <span data-testid="ffSubCus">Happy Customers</span>
          </div>
          <div>
            <h3 data-testid="ffTitleHours">{`> ${hours}`}</h3>
            <span data-testid="ffSubHours">Hours Worked</span>
          </div>
          <div>
            <h3 data-testid="ffTitleAwards">{`> ${awards}`}</h3>
            <span data-testid="ffSubAwards">Awards Won</span>
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

export default React.memo(FunFacts);
