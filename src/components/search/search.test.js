import { screen, render } from "@testing-library/react";
import Search from "./search";

test("Category renders", () => {
  render(<Search />);
  const input = screen.getByPlaceholderText("Search by App");
  expect(input).toBeInTheDocument();
  expect(input.value).toBe("");
});
