import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from '..';

describe('Should render <Button /> correctly', () => {
  afterEach(cleanup);

  test('showing correct label button', () => {
    const { getByText } = render(<Button label="Click Me" />);

    expect(getByText('Click Me')).toBeVisible();
  });
});
