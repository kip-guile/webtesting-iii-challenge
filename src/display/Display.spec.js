// Test away!

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import Display from './Display';

let display;

afterEach(rtl.cleanup)

beforeEach(() => {
    display = rtl.render(<Display />);
  });

describe('Display component', () => {

    test('should match snapshot', () => {
        expect(display).toMatchSnapshot();
    })

    test('displays Closed if the `closed` prop is `true` and Open if otherwise', () => {
        const displayClosed = rtl.render(<Display closed={true}/>);
        expect(displayClosed.queryByText(/Closed/i)).toBeInTheDocument();
      });

    // test('displays Closed if the `closed` prop is `true` and Open if otherwise', () => {
    // const displayLocked = rtl.render(<Display locked={true}/>);
    // expect(displayLocked.queryByText(/Locked/i)).toBeInTheDocument();
    // });

})