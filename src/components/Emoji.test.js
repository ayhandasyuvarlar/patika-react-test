import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Emoji test", () => {
  beforeEach(() => {
    render(<App></App>);
  });

  test("title is render true", () => {
    const header = screen.getByText("Emoji Search App");
    expect(header).toBeInTheDocument();
  });
  test("emoji list rendering?", () => {
    const emojiLists = screen.getByText("100");
    expect(emojiLists).toBeInTheDocument();
  });

  test("Does the list re-render with the value entered from the input?", () => {
    const searchText = "heart";
    const input = screen.getByPlaceholderText("search any emoji");
    fireEvent.change(input, { target: { value: searchText } });
  });
});
