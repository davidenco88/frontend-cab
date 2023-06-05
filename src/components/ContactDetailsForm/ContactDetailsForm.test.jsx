import { describe, expect, test } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactDetailsForm from './ContactDetailsForm';

describe('ContacDetailsForm test', () => {
  test('Should render successfully', () => {
    render(<ContactDetailsForm />);
  });

  test('Should renders input fields', () => {
    render(<ContactDetailsForm />);

    const firstNameInput = screen.getByPlaceholderText('First name');
    const lastNameInput = screen.getByPlaceholderText('Last name');
    const emailInput = screen.getByPlaceholderText('Enter email');
    const phoneNumberInput = screen.getByPlaceholderText('Phone Number');
    const promoCodeInput = screen.getByPlaceholderText('Promo Code');

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneNumberInput).toBeInTheDocument();
    expect(promoCodeInput).toBeInTheDocument();
  });
});
