import { render, screen, fireEvent } from '@testing-library/react';
import ListFilter from './ListFilter';

describe.skip('ListFilter Tests', () => {
  beforeEach(() => {
    const barIcon = 'barIcon';
    const closeIcon = 'closeIcon';
    const filterOptions = 'filterOptions';
    render(<ListFilter
      testFilterOptions={filterOptions}
      testBarIcon={barIcon}
      testCloseIcon={closeIcon}
    />);
  });

  test('should render title', () => {
    expect(screen.getByText(/filter/i)).toBeDefined();
  });

  test('Should NOT show any filter options due to hide class', () => {
    const filterDiv = screen.getByTestId('filterOptions');
    expect(filterDiv).toHaveClass('hide');
  });

  test('Should Change barIcon to closeIcon when clicked  ', () => {
    const clickedIcon = screen.getByTestId('barIcon');
    fireEvent.click(clickedIcon);
    expect(screen.getByTestId('closeIcon')).toBeDefined();
  });
});
