import { describe, expect, test } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import HowToGetCardPhone from './HowToGetCardPhone';

describe('BookingSummery test', () => {
  test('Should render successfully', () => {
    render(<HowToGetCardPhone />);
  });

  test('Should show content correctly', () => {
    render(<HowToGetCardPhone />);

    //const h1 = screen.getByText('Super Easy Booking');


    //expect(h1).toBeInTheDocument();

  });
});
