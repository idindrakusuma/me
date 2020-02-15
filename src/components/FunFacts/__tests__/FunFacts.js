import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FunFacts from '../index';

describe('Verifying the <FunFacts /> components..', () => {
  afterEach(cleanup);

  test('should showing correct information', () => {
    const { getByTestId } = render(<FunFacts projects={30} customers={27} hours={4500} awards={7} />);

    expect(getByTestId('ffTitlePro')).toHaveTextContent('> 30');
    expect(getByTestId('ffSubPro')).toHaveTextContent('Projects Completed');

    expect(getByTestId('ffTitleCus')).toHaveTextContent('> 27');
    expect(getByTestId('ffSubCus')).toHaveTextContent('Happy Customers');

    expect(getByTestId('ffTitleHours')).toHaveTextContent('> 4500');
    expect(getByTestId('ffSubHours')).toHaveTextContent('Hours Worked');

    expect(getByTestId('ffTitleAwards')).toHaveTextContent('> 7');
    expect(getByTestId('ffSubAwards')).toHaveTextContent('Awards Won');
  });
});
