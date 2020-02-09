import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Card from '../index';

describe('Should render <Card /> correctly', () => {
  afterEach(cleanup);

  test('should showing children correctly', () => {
    const { getByTestId } = render(
      <Card data-testid="card">
        <h1>Hello guys</h1>
      </Card>,
    );

    expect(getByTestId('card')).toHaveTextContent('Hello guys');
  });

  test('should showing title if user use props `title`', () => {
    const { getByTestId, getByText } = render(
      <Card data-testid="card" title="About us">
        <h1>Hello guys</h1>
      </Card>,
    );

    expect(getByTestId('card')).toHaveTextContent('Hello guys');
    expect(getByText('About us')).toBeInTheDocument();
  });
});
