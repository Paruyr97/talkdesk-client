import { screen, render } from "@testing-library/react";
import { notFound, _categories } from "../../constants";
import App from "./app";

describe("App component test", () => {
  test("render App", () => {
    render(<App />);
    expect(screen.getByText(notFound)).toBeInTheDocument();
    expect(screen.getByText(_categories)).toBeInTheDocument();
  });
});
