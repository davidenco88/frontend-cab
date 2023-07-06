import { describe, expect, test } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import HowToGetCard from './HowToGetCard';

describe('BookingSummery test', () => {
  test('Should render successfully', () => {
    render(<HowToGetCard />);
  });

  test('Should show content correctly', () => {
    render(<HowToGetCard />);

    const buttonAple = screen.getByText('App Sotre');
    const buttonAndroid = screen.getByText('PlayStore');
    const p = screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

    expect(buttonAple).toBeInTheDocument();
    expect(buttonAndroid).toBeInTheDocument();
    expect(p).toBeInTheDocument();

  });
});
