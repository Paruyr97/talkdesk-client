import { screen, render } from "@testing-library/react";
import { _categories } from "../../constants";
import Categories from "./categories";

describe('Category component test', () => {
    test('Category renders', () => {
        render(<Categories />);
        expect(screen.getByText(_categories)).toBeInTheDocument();
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
})
