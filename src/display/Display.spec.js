import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
    it('should display closed when door is closed', () => {
        const { getByText } = render(<Display closed={true} />);

        expect(getByText(/closed/i)).toBeInTheDocument();
    })

    it('should display open when door is open', () => {
        const { getByText } = render(<Display closed={false} />);

        expect(getByText(/closed/i)).toBeInTheDocument();
    })

    it('should display locked when door is locked', () => {
        const { getByText } = render(<Display locked={true} />);

        expect(getByText(/locked/i)).toBeInTheDocument();
    })

    it('should display unlocked when door is unlocked', () => {
        const { getByText } = render(<Display locked={false} />);

        expect(getByText(/unlocked/i)).toBeInTheDocument();
    })
})