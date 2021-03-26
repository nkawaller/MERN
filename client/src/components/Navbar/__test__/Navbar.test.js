import React from "react";
import ReactDOM from "react-dom";

import Navbar from "../Navbar";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderer from 'react-test-renderer';

afterEach(cleanup);
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Navbar></Navbar>, div)
})