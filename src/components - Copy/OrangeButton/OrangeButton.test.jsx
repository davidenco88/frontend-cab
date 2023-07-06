import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import OrangeButton from './OrangeButton';

describe('OrangeButton test', () => {
  test('Should show title', () => {
    render(<OrangeButton text="Testing" />);
    expect(screen.getByText(/Testing/i)).toBeDefined();
  });
});
