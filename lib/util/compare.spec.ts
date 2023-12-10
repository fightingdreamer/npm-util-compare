import { test, expect, describe } from "vitest";
import {
  compareAny,
  compareAnyReversed,
  compareProps,
  comparePropsReversed,
} from "./compare";

describe("compareAny", () => {
  test.each([
    { a: "a", b: "b", expected: -1 },
    { a: "", b: "", expected: 0 },
    { a: "b", b: "a", expected: +1 },
  ])("compare($a, $b) -> $expected", ({ a, b, expected }) => {
    expect(compareAny(a, b)).toEqual(expected);
  });
});

describe("compareAnyReversed", () => {
  test.each([
    { a: "a", b: "b", expected: +1 },
    { a: "", b: "", expected: 0 },
    { a: "b", b: "1", expected: -1 },
  ])("compare($a, $b) -> $expected", ({ a, b, expected }) => {
    expect(compareAnyReversed(a, b)).toEqual(expected);
  });
});

describe("compareProps", () => {
  test.each([
    { a: { p: "a" }, b: { p: "b" }, expected: -1 },
    { a: { p: "" }, b: { p: "" }, expected: 0 },
    { a: { p: "b" }, b: { p: "1" }, expected: +1 },
  ])("compare($a, $b) -> $expected", ({ a, b, expected }) => {
    expect(compareProps("p")(a, b)).toEqual(expected);
  });
});

describe("comparePropsReversed", () => {
  test.each([
    { a: { p: "a" }, b: { p: "b" }, expected: +1 },
    { a: { p: "" }, b: { p: "" }, expected: 0 },
    { a: { p: "b" }, b: { p: "1" }, expected: -1 },
  ])("compare($a, $b) -> $expected", ({ a, b, expected }) => {
    expect(comparePropsReversed("p")(a, b)).toEqual(expected);
  });
});
