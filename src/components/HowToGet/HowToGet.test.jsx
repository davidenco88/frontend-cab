import { describe, expect, test } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import HowToGet from './HowToGet';

describe('BookingSummery test', () => {
  test('Should render successfully', () => {
    render(<HowToGet />);
  });

  test('Should show content correctly', () => {
    render(<HowToGet />);

    const h1 = screen.getByText('Super Easy Booking');


    expect(h1).toBeInTheDocument();

  });
});
