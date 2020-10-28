import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it("renders", function() {
  render(<NewBoxForm />);
});

it("match snapshot", function() {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});
