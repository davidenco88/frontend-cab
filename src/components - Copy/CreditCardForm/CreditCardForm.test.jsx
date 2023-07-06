import { describe, expect, test } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import CreditCardForm from './CreditCardForm';

describe.skip('CreditCardForm test', () => {
  test('Should renders successfully', () => {
    render(<CreditCardForm />);
  });

  test('Should renders input fields', () => {
    render(<CreditCardForm />);

    const cardOwnerInput = screen.getByLabelText(/name on card/i);
    const cardNumberInput = screen.getByLabelText(/card number/i);
    const cardMonthInput = screen.getByLabelText(/month/i);
    const cardYearInput = screen.getByLabelText(/year/i);
    const cardCVVInput = screen.getByLabelText(/cvv/i);

    expect(cardOwnerInput).toBeInTheDocument();
    expect(cardNumberInput).toBeInTheDocument();
    expect(cardMonthInput).toBeInTheDocument();
    expect(cardYearInput).toBeInTheDocument();
    expect(cardCVVInput).toBeInTheDocument();
  });

  test('Should renders the credit card icons', () => {
    render(<CreditCardForm />);

    const visaIcon = screen.getByAltText(/visa icon/i);
    const mastercardIcon = screen.getByAltText(/mastercard icon/i);
    const amexIcon = screen.getByAltText(/amex icon/i);
    const cvvIcon = screen.getByAltText(/cvv icon/i);

    expect(visaIcon).toBeInTheDocument();
    expect(mastercardIcon).toBeInTheDocument();
    expect(amexIcon).toBeInTheDocument();
    expect(cvvIcon).toBeInTheDocument();
  });
});
