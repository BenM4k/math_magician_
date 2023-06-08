import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

// Tests that the active link is highlighted with the correct color.
it('test_active_link_highlighted', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );

  const homeLink = screen.getByText('Home');
  expect(homeLink).toHaveStyle({ color: '#ff007f' });
});

// Tests that all links in the navbar are displayed correctly.
it('test_links_displayed_correctly', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );

  const links = [
    { path: '/', name: 'Home' },
    { path: '/calculator', name: 'Calculator' },
    { path: '/quotes', name: 'Quotes' },
  ];

  links.forEach((link) => {
    expect(screen.getByText(link.name)).toBeInTheDocument();
  });
});
