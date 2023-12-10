import { test, expect, describe } from "vitest";
import {
  compare,
  compareReversed,
  compareProperty,
  comparePropertyReversed,
} from "./compare";

describe("compare", () => {
  test.each([
    { a: "a", b: "b", expected: -1 },
    { a: "", b: "", expected: 0 },
    { a: "b", b: "a", expected: +1 },
  ])("compare($a, $b) -> $expected", ({ a, b, expected }) => {
    expect(compare(a, b)).toEqual(expected);
  });
});

describe("compareReversed", () => {
  test.each([
    { a: "a", b: "b", expected: +1 },
    { a: "", b: "", expected: 0 },
    { a: "b", b: "1", expected: -1 },
  ])("compare($a, $b) -> $expected", ({ a, b, expected }) => {
    expect(compareReversed(a, b)).toEqual(expected);
  });
});

describe("compareProperty", () => {
  test.each([
    { a: { p: "a" }, b: { p: "b" }, expected: -1 },
    { a: { p: "" }, b: { p: "" }, expected: 0 },
    { a: { p: "b" }, b: { p: "1" }, expected: +1 },
  ])("compare($a, $b) -> $expected", ({ a, b, expected }) => {
    expect(compareProperty("p")(a, b)).toEqual(expected);
  });
});

describe("comparePropertyReversed", () => {
  test.each([
    { a: { p: "a" }, b: { p: "b" }, expected: +1 },
    { a: { p: "" }, b: { p: "" }, expected: 0 },
    { a: { p: "b" }, b: { p: "1" }, expected: -1 },
  ])("compare($a, $b) -> $expected", ({ a, b, expected }) => {
    expect(comparePropertyReversed("p")(a, b)).toEqual(expected);
  });
});
