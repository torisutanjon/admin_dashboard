import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import App from "../App";
import { expect, test } from "@jest/globals";

describe("some test", () => {
  test("random truthy test", () => {
    expect(true).toBeTruthy();
  });
  test("Should App renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
