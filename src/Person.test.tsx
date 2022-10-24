import { render, screen } from "@testing-library/react";
import { Person } from "./Person";

test("renders a name", () => {
  render(<Person name="Walison" />);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toHaveTextContent("Name is Walison");
  expect(divElement).toHaveAttribute("role", "contentinfo");
});
