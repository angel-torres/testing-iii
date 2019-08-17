import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard';

describe('<Dashboard/>', () => {
    it('should render unlocked', () => {
        const { getByText } = render(<Dashboard />)

        expect(getByText(/unlocked/i)).toBeInTheDocument();
    })

    it('should render open', () => {
        const { getByText } = render(<Dashboard />)

        expect(getByText(/open/i)).toBeInTheDocument();
    })

    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON()

        expect(tree).toMatchSnapshot();
    })
})



// Test away
