import React from "react";
import { render, screen } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'

import App from "./App";

test("renders Hello world text", () => {
  render(<App />, {wrapper: BrowserRouter});
  const Hello = screen.getByText(/Satoyama Home Page/i);
  expect(Hello).toBeInTheDocument();
});
