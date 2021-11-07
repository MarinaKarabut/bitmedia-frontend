import { render } from '@testing-library/react';
import React from 'react';
import MainPage from './MainPage';

describe('MainPage', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<MainPage {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('MainPage')).toBeTruthy();
    });
});
