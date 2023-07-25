import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders URL Shortner", () => {
  render(<App />);
  const linkElement = screen.getByText(/Your short URL/i);
  expect(linkElement).toBeInTheDocument();
});
