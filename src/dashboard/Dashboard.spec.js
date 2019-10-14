// Test away

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import Dashboard from './Dashboard';

let dashboard;

afterEach(rtl.cleanup)

beforeEach(() => {
    dashboard = rtl.render(<Dashboard />);
  });

  describe('App component', () => {

    test('should match snapshot', () => {
        expect(dashboard).toMatchSnapshot();
    })

    test('default is unlocked', () => {
        
        expect(dashboard.queryByText(/Unlocked/i)).toBeInTheDocument();
    });

    test('default is open', () => {
        
        expect(dashboard.queryByText(/Open/i)).toBeInTheDocument();
    });

  })