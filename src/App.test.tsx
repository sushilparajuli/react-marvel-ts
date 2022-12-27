import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app with title", () => {
  render(<App />);
  const linkElement = screen.getByText(/marvel app/i);
  expect(linkElement).toBeInTheDocument();
});
