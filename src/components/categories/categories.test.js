import { screen, render } from "@testing-library/react";
import Categories from "./categories";

test('test app component', () => {
    render(<Categories />);
    const categories = screen.getByText(/Categories/i);
    console.log('-------');
    expect(categories).toBeInTheDocument();
});
