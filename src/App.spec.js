import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('Should render without error', () => {
        render(<App />);
    // expect(true).toBe(true);
    });
});
