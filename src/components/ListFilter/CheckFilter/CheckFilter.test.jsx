import { render, screen, fireEvent } from '@testing-library/react';
import CheckFilter from './CheckFilter';

describe('CheckFilter Tests', () => {
  beforeEach(() => {
    const data = {
      title: 'Car Types',
      checks: ['Mini',
        'Medium',
        'Standard',
        'Van',
        'Luxury'],
    };
    // const { title } = data;
    const plusIcon = 'plusIcon';
    const minusIcon = 'minusIcon';
    render(<CheckFilter data={data} testPlusIcon={plusIcon} testMinusIcon={minusIcon} />);
  });

  test('should show title all the time', () => {
    expect(screen.getByText(/car type/i)).toBeDefined();
  });

  test('should NOT show any of the list elements due to the hide css class', () => {
    const listElement = screen.getByRole('list');
    expect(listElement).toHaveClass('hide');
  });

  test('Plus Icon should render', () => {
    expect(screen.getByTestId('plusIcon')).toBeInTheDocument();
  });

  test('plusIcon should change for minusIcon when clicked', () => {
    const clickedIcon = screen.getByTestId('plusIcon');
    fireEvent.click(clickedIcon);
    expect(screen.getByTestId('minusIcon')).toBeInTheDocument();
  });
});
