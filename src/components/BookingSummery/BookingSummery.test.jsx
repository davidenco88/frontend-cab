import { describe, expect, test } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingSummery from './BookingSummery';

describe('BookingSummery test', () => {
  test('Should render successfully', () => {
    render(<BookingSummery />);
  });

  test.skip('Should show content correctly', () => {
    render(<BookingSummery />);

    const header = screen.getByText('Booking Summery');
    const itinerary = {
      span_1: screen.getByText('Itinerary:'),
      span_2: screen.getByText('Paris--Toules'),
    };
    const pickupDate = {
      span_1: screen.getByText('Pickup Date:'),
      span_2: screen.getByText('04/06/2023, 11:35pm'),
    };
    const returnDate = {
      span_1: screen.getByText('Return Date:'),
      span_2: screen.getByText('14/06/2023, 13:00pm'),
    };
    const carType = {
      span_1: screen.getByText('Car Type:'),
      span_2: screen.getByText('Fiat Chrysler'),
    };
    // const totalFare = screen.getByText('Total Fare: $1250');
    const totalFare = {
      span_1: screen.getByText('Total Fare:'),
      span_2: screen.getByText('$1250'),
    };

    expect(header).toBeInTheDocument();
    expect(itinerary.span_1).toBeInTheDocument();
    expect(itinerary.span_2).toBeInTheDocument();
    expect(pickupDate.span_1).toBeInTheDocument();
    expect(pickupDate.span_2).toBeInTheDocument();
    expect(returnDate.span_1).toBeInTheDocument();
    expect(returnDate.span_2).toBeInTheDocument();
    expect(carType.span_1).toBeInTheDocument();
    expect(carType.span_2).toBeInTheDocument();
    expect(totalFare.span_1).toBeInTheDocument();
    expect(totalFare.span_2).toBeInTheDocument();
  });
});
