import { render } from '@testing-library/react';
import React from 'react';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<NotFoundPage {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('NotFoundPage')).toBeTruthy();
    });
});
