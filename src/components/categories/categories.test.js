import { screen, render } from "@testing-library/react";
import Categories from "./categories";

test('test app component', () => {
    render(<Categories />);
    expect(screen.getByText('Categories')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
});
