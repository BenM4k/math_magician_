import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import Navbar from './Navbar';

// Tests that the Layout component renders a Navbar and an Outlet component.
it('test_layout_renders_navbar_and_outlet', () => {
  render(
    <BrowserRouter>
      <Layout />
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

// Tests that the Layout component has the correct style properties.
it('test_layout_style', () => {
  // Arrange
  const { container } = render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>,
  );

  // Act
  const element = container.firstChild;

  // Assert
  expect(element).toHaveStyle('width: 100%');
  expect(element).toHaveStyle('height: 100%');
});
