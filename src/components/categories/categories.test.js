import { screen, render } from "@testing-library/react";
import Categories from "./categories";

describe('Category component', () => {
    test('Category renders', () => {
        render(<Categories />);
        expect(screen.getByText('Categories')).toBeInTheDocument();
        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByText(/nav/)).toBeInTheDocument()
    });
    
    test('Category renders with selectedCategory', () => {
        // render(<Categories selectedCategory="Channels" />);
        // expect(document.getElementsByClassName('active').length).toBe(1)
    })
})
