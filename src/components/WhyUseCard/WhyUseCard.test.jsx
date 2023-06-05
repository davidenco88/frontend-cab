import { describe, expect, test } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import WhyUseCard from './WhyUseCard';
import WhyUseCard2 from './WhyUseCard2';
import WhyUseCard3 from './WhyUseCard3';
import WhyUseCard4 from './WhyUseCard4';
describe('why use cards test', () => {
  test('Should render successfully', () => {
    render(<WhyUseCard />);
    render(<WhyUseCard2 />);
    render(<WhyUseCard3 />);
    render(<WhyUseCard4 />);
  });
  test('Should show content correctly', () => {
    render(<WhyUseCard />);
    //const div screen = React.createElement
    const h3 = screen.getByText('4500 + Rides Dauly');
    const p = screen.getByText('Every daay more than 4500 customers take rides with RICA CAB.');
    expect(h3).toBeInTheDocument();
    expect(p).toBeInTheDocument();

  });
  test('Should show content correctly', () => {
    render(<WhyUseCard2 />);
    const h3 = screen.getByText('3,000,000 Hapy customers');
    const p = screen.getByText('Til today Rica Cab Has More than 3M of happy users.');
    expect(h3).toBeInTheDocument();
    expect(p).toBeInTheDocument();
  });
  test('Should show content correctly', () => {
    render(<WhyUseCard3 />);
    const h3 = screen.getByText('45,000 + Locations');
    const p = screen.getByText('Rica Cab has mora than 45k Locations at diferent countries and cities.');
    expect(h3).toBeInTheDocument();
    expect(p).toBeInTheDocument();
  });
  test('Should show content correctly', () => {
    render(<WhyUseCard4 />);
    const h3 = screen.getByText('10,000 Cabs');
    const p = screen.getByText('Rica cab has more than 10000 cabs wich includes luxury cards too.');
    expect(h3).toBeInTheDocument();
    expect(p).toBeInTheDocument();
  });
});
