import { render } from '@testing-library/react';
import React from 'react';
import Table from './Table';

describe('Table', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Table {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Table')).toBeTruthy();
    });
});
