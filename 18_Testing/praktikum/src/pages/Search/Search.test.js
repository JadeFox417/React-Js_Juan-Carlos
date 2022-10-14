import React from "react";
import axios from "axios";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

jest.mock("axios");

describe("Search", () => {
  test("fetch stories from an API and displays them", async () => {
    const stories = [
      { objectID: "1", title: "Hello" },
      { objectID: "2", title: "React" },
    ];

    axios.get.mockImplementationOnce(() => Promise.resolve({ data: { hits: stories } }));

    render(<Search />);

    await userEvent.click(screen.getByRole("button"));

    const message = await screen.findAllByRole("listitem");

    expect(message).toHaveLength(2);
  });

  test("fetch stories from an API and fails", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    render(<Search />);

    await userEvent.click(screen.getByRole("button"));

    const message = await screen.findByText(/Ada yang error .../);

    expect(message).toBeInTheDocument();
  });

  test("fetch stories from an API when user type on search bar", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: { value: "" } }));

    render(<Search />);

    await fireEvent.input(screen.getByRole("textbox"), { target: { value: "React Testing" } });

    const message = await screen.findByPlaceholderText(/Tulis Cerita/);

    expect(message).toHaveValue("React Testing");
  });
});
