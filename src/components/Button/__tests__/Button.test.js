import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from '..';

describe('Should render <Button /> correctly', () => {
  afterEach(cleanup);

  test('showing correct label button', () => {
    const { getByText } = render(<Button label="Click Me">Click Me</Button>);

    expect(getByText('Click Me')).toBeVisible();
  });

  test('should `onClick` props working properly', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button onClick={onClickMock}>Submit</Button>);

    fireEvent.click(getByText('Submit'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
