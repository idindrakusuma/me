import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Title from '../index';

describe('Should render <Title /> correctly', () => {
  afterEach(cleanup);

  test('should showing correct title', () => {
    const { getByTestId } = render(<Title data-testid="title" text="About me" />);

    expect(getByTestId('title')).toHaveTextContent('About me');
  });
});
