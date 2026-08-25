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
    expect(screen.getAllByText('Home')[0]).toBeInTheDocument();
    expect(screen.getAllByText('About')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Skills')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Experience')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Projects')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Education')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Contact')[0]).toBeInTheDocument();
  });

  it('navigation links point to the correct anchors', () => {
    render(<NavBar />);
    expect(screen.getAllByText('Home')[0]).toHaveAttribute('href', '/#home');
    expect(screen.getAllByText('About')[0]).toHaveAttribute('href', '/#about');
    expect(screen.getAllByText('Skills')[0]).toHaveAttribute('href', '/#skills');
    expect(screen.getAllByText('Experience')[0]).toHaveAttribute('href', '/#experience');
    expect(screen.getAllByText('Projects')[0]).toHaveAttribute('href', '/#projects');
    expect(screen.getAllByText('Education')[0]).toHaveAttribute('href', '/#education');
    expect(screen.getAllByText('Contact')[0]).toHaveAttribute('href', '/#contact');
  });
});


