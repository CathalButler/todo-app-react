import {render} from '@testing-library/react';
import Home from "./Home/Home";

test('renders correctly', () => {
  render(<Home />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
