import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Skills from '../index';

const MOCK_DATA = [
  {
    skill: 'HTML / CSS',
    percentage: 90,
    full: false,
  },
  {
    skill: 'Javascript / ReactJS / GatsbyJS',
    percentage: 90,
    full: false,
  },
];

describe('Verifying the <Skills /> components..', () => {
  afterEach(cleanup);

  test('should showing correct title', () => {
    const { getByTestId, rerender } = render(<Skills title={MOCK_DATA[0].skill} ability={MOCK_DATA[0].percentage} />);

    expect(getByTestId('skillsTitle')).toHaveTextContent(MOCK_DATA[0].skill);
    expect(getByTestId('skillsAbility')).toHaveTextContent(MOCK_DATA[0].percentage);

    /**
     * Try another props data
     */
    rerender(<Skills title={MOCK_DATA[1].skill} ability={MOCK_DATA[1].percentage} />);

    expect(getByTestId('skillsTitle')).toHaveTextContent(MOCK_DATA[1].skill);
    expect(getByTestId('skillsAbility')).toHaveTextContent(MOCK_DATA[1].percentage);
  });
});
