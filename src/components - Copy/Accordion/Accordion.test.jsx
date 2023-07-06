import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Accordion from './Accordion';

describe('Accordion test', () => {
  test('Should show title', () => {
    render(<Accordion text="Testing" title="Useres" />);
    expect(screen.getByText(/Testing/i)).toBeDefined();
  });
});
