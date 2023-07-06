import { describe, expect, test } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import CouponForm from './CouponForm';

describe('BookingSummery test', () => {
  test('Should render successfully', () => {
    render(<CouponForm />);
  });

  test('renders input field', () => {
    render(<CouponForm />);

    const inputElement = screen.getByPlaceholderText('Promo Code');

    expect(inputElement).toBeInTheDocument();
  });

  test('renders the apply button', () => {
    render(<CouponForm />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeInTheDocument();
  });

  test('renders the radio buttons', () => {
    render(<CouponForm />);

    const radioButtons = screen.getAllByRole('radio');

    expect(radioButtons.length).toBe(3);
  });
});
