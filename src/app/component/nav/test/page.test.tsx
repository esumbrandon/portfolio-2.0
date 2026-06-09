import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../page';

describe('NavBar', () => {
  it('renders the logo image', () => {
    render(<NavBar />);
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<NavBar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('navigation links point to the correct anchors', () => {
    render(<NavBar />);
    expect(screen.getByText('Home')).toHaveAttribute('href', '/#home');
    expect(screen.getByText('About')).toHaveAttribute('href', '/#about');
    expect(screen.getByText('Skills')).toHaveAttribute('href', '/#skills');
    expect(screen.getByText('Experience')).toHaveAttribute('href', '/#experience');
    expect(screen.getByText('Projects')).toHaveAttribute('href', '/#projects');
    expect(screen.getByText('Contact')).toHaveAttribute('href', '/#contact');
  });
});

