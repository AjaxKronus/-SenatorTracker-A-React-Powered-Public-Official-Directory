import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SenatorTable from './src/components/SenatorTable';

const TEST_SENATORS = [
  {
    name: 'Test Sen 1',
    party: 'D - AB',
    state: 'California',
    phone: '123-456-789',
    twitter: 'test1',
  },
  // Add more test senators if needed
];

describe('The Senator listing app', () => {
  describe('implements a `SenatorTable` component', () => {
    it('renders a table', () => {
      const { container } = render(<SenatorTable senatorsList={TEST_SENATORS} />);
      expect(container.querySelector('table')).not.toBeNull(); // contains a table
    });

    it('has appropriate classes for styling', () => {
      const { container } = render(<SenatorTable senatorsList={TEST_SENATORS} />);
      const tableClassList = container.querySelector('table').classList;
      expect(tableClassList.contains('table')).toBe(true);
      expect(tableClassList.contains('table-bordered')).toBe(true);
    });

    it('renders a TableHeader', () => {
      render(<SenatorTable senatorsList={TEST_SENATORS} />);
      expect(screen.getByTestId('TableHeader')).toBeInTheDocument(); // contains a TableHeader
    });

    it('renders rows for Senators', () => {
      render(<SenatorTable senatorsList={TEST_SENATORS} />);
      expect(screen.getAllByTestId('SenatorRow').length).toBe(TEST_SENATORS.length); // includes SenatorRows (correct number)
    });
  });

  describe('implements a `TableHeader` component', () => {
    it('renders a table header element', () => {
      const { container } = render(<TableHeader />);
      expect(container.querySelector('thead')).not.toBeNull();
      expect(container.querySelectorAll('thead > tr').length).toBe(1);
      expect(container.querySelectorAll('tr > th').length).toBe(5); // assuming 5 headings
    });

    it('renders header cells based on the props', () => {
      const headings = ['Name', 'Party', 'State', 'Phone', 'Twitter'];
      const { container } = render(<TableHeader />);
      let ths = container.querySelectorAll('th');
      headings.forEach((heading, index) => {
        expect(ths[index].textContent).toEqual(heading);
      });
    });
  });

  describe('implements a `SenatorRow` component', () => {
    it('renders a table row', () => {
      const senator = TEST_SENATORS[0];
      const { container } = render(<SenatorRow senator={senator} />);
      expect(container.querySelectorAll('tr').length).toBe(1);
      expect(container.querySelectorAll('tr > td').length).toBe(5); // 5 columns
    });

    it('renders the correct cells based on the props', () => {
      const senator = TEST_SENATORS[0];
      const { container } = render(<SenatorRow senator={senator} />);
      const cells = container.querySelectorAll('td');
      expect(cells[0].textContent).toEqual(senator.name);
      expect(cells[1].textContent).toEqual(senator.party);
      expect(cells[2].textContent).toEqual(senator.state);
      expect(cells[3].innerHTML).toEqual(`<a href="tel:${senator.phone}">${senator.phone}</a>`); // just hard-code it for now
      expect(cells[4].innerHTML).toEqual(`<a href="https://twitter.com/${senator.twitter}">@${senator.twitter}</a>`);
    });
  });
});
