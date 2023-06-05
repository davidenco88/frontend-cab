import { describe, expect, test } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import WhyUse from './WhyUse';

describe('BookingSummery test', () => {
  test('Should render successfully', () => {
    render(<WhyUse />);
  });

  test('Should show content correctly', () => {
    render(<WhyUse />);
    const h3 = screen.getByText('WHY CHOOSE RICA');
    const h2 = screen.getByText('Welcome to Rica');
    const p = screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    expect(h3).toBeInTheDocument();
    expect(p).toBeInTheDocument();
    expect(h2).toBeInTheDocument();

  });
});
