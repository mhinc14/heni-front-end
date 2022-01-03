import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Pagination from "components/pagination";

test("Pagination return correct value when clicked", () => {
  const onChange = jest.fn();
  render(<Pagination onChange={onChange} />);
  fireEvent(
    screen.getByText("2"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(onChange).toHaveBeenCalledWith(2);
});

test("Pagination displays loading element", () => {
  const onChange = jest.fn();
  render(<Pagination onChange={onChange} loading={true} />);
  const text = screen.getByTestId("pagination-loader");
  expect(text).toBeInTheDocument();
});
