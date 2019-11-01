// Test away!

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import Controls from './Controls';

let control;

afterEach(rtl.cleanup)

beforeEach(() => {
    control = rtl.render(<Controls />);
  });

describe('App component', () => {

    test('should match snapshot', () => {
        expect(control).toMatchSnapshot();
    })

    test('default is lock button', () => {
        
        expect(control.queryByText(/Lock/i)).toBeInTheDocument();
    });

    test('default is close button', () => {
        
        expect(control.queryByText(/Close/i)).toBeInTheDocument();
    });

    // test('close button text changes when toggled', () => {
    //     const closeButton = control.queryByTestId('closeButton');
        
    //     rtl.fireEvent.click(closeButton);
    //     expect(control.queryByText(/Close/i)).not.toBeInTheDocument();
    // });


})