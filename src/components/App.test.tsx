import {render} from '@testing-library/react';
import MainNavbar from "./Home/MainNavbar";

test('renders correctly', () => {
  render(<MainNavbar />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
