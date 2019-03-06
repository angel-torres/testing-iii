import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';

describe('<Controls/>', () => {
    it('toggleClose function should be called', () => {
        const toggleClose = jest.fn()

        const { getByText } = render(<Controls toggleClosed={toggleClose}/>)

        const closeGateBtn = getByText(/close gate/i);

        fireEvent.click(closeGateBtn)

        expect(toggleClose).toHaveBeenCalled()
    })


    it('toggleClose function should be called', () => {
        const toggleLocked = jest.fn();
        const closed = true;

        const { getByText } = render(<Controls closed={true} toggleLocked={toggleLocked}/>)

        const lockGateBtn = getByText(/lock gate/i);

        fireEvent.click(lockGateBtn);

        expect(toggleLocked).toHaveBeenCalled()
    })

    it('should render lock gate button', () => {
        const { getByText } = render(<Controls/>) 

        expect(getByText(/lock gate/i)).toBeInTheDocument()
    })

    it('should render close gate button', () => {
        const { getByText } = render(<Controls/>) 

        expect(getByText(/close gate/i)).toBeInTheDocument()
    })
})
