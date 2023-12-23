import { test, expect, describe } from "vitest";
import {
  compare,
  compareReversed,
  compareFromProperty,
  compareFromPropertyReversed,
  compareFromFunction,
  compareFromFunctionReversed,
  compareFromMany,
  compareFromManyReversed,
} from "./compare";

describe("compare", () => {
  test.each([
    { a: "a", b: "b", expected: -1 },
    { a: "", b: "", expected: 0 },
    { a: "b", b: "a", expected: +1 },
  ])("($a, $b) -> $expected", ({ a, b, expected }) => {
    expect(compare(a, b)).toEqual(expected);
  });
});

describe("compareReversed", () => {
  test.each([
    { a: "a", b: "b", expected: +1 },
    { a: "", b: "", expected: 0 },
    { a: "b", b: "a", expected: -1 },
  ])("($a, $b) -> $expected", ({ a, b, expected }) => {
    expect(compareReversed(a, b)).toEqual(expected);
  });
});

describe("compareFromProperty", () => {
  test.each([
    { a: { p: "a" }, b: { p: "b" }, expected: -1 },
    { a: { p: "" }, b: { p: "" }, expected: 0 },
    { a: { p: "b" }, b: { p: "a" }, expected: +1 },
  ])("($a, $b) -> $expected", ({ a, b, expected }) => {
    expect(compareFromProperty("p")(a, b)).toEqual(expected);
  });
});

describe("compareFromPropertyReversed", () => {
  test.each([
    { a: { p: "a" }, b: { p: "b" }, expected: +1 },
    { a: { p: "" }, b: { p: "" }, expected: 0 },
    { a: { p: "b" }, b: { p: "a" }, expected: -1 },
  ])("($a, $b) -> $expected", ({ a, b, expected }) => {
    expect(compareFromPropertyReversed("p")(a, b)).toEqual(expected);
  });
});

describe("compareFromFunction", () => {
  test.each([
    { a: { p: "a" }, b: { p: "b" }, fn: (o: any) => o.p, expected: -1 },
    { a: { p: "" }, b: { p: "" }, fn: (o: any) => o.p, expected: 0 },
    { a: { p: "b" }, b: { p: "a" }, fn: (o: any) => o.p, expected: +1 },
  ])("($a, $b) -> $expected", ({ a, b, fn, expected }) => {
    expect(compareFromFunction(fn)(a, b)).toEqual(expected);
  });
});

describe("compareFromFunctionReversed", () => {
  test.each([
    { a: { p: "a" }, b: { p: "b" }, fn: (o: any) => o.p, expected: +1 },
    { a: { p: "" }, b: { p: "" }, fn: (o: any) => o.p, expected: 0 },
    { a: { p: "b" }, b: { p: "a" }, fn: (o: any) => o.p, expected: -1 },
  ])("($a, $b) -> $expected", ({ a, b, fn, expected }) => {
    expect(compareFromFunctionReversed(fn)(a, b)).toEqual(expected);
  });
});

describe("compareFromMany", () => {
  test.each([
    {
      a: { p1: "a", p2: "b" },
      b: { p1: "b", p2: "a" },
      fns: [
        { compareFn: compareFromProperty("p1"), weight: 2 },
        { compareFn: compareFromProperty("p2"), weight: 1 },
      ],
      expected: -1,
    },
    {
      a: { p1: "a", p2: "b" },
      b: { p1: "b", p2: "a" },
      fns: [
        { compareFn: compareFromProperty("p1"), weight: 1 },
        { compareFn: compareFromProperty("p2"), weight: 2 },
      ],
      expected: +1,
    },
    {
      a: { p1: "", p2: "" },
      b: { p1: "", p2: "" },
      fns: [
        { compareFn: compareFromProperty("p1"), weight: 2 },
        { compareFn: compareFromProperty("p2"), weight: 1 },
      ],
      expected: 0,
    },
    {
      a: { p1: "b", p2: "a" },
      b: { p1: "a", p2: "b" },
      fns: [
        { compareFn: compareFromProperty("p1"), weight: 2 },
        { compareFn: compareFromProperty("p2"), weight: 1 },
      ],
      expected: +1,
    },
    {
      a: { p1: "b", p2: "a" },
      b: { p1: "a", p2: "b" },
      fns: [
        { compareFn: compareFromProperty("p1"), weight: 1 },
        { compareFn: compareFromProperty("p2"), weight: 2 },
      ],
      expected: -1,
    },
  ])("($a, $b) -> $expected", ({ a, b, fns, expected }) => {
    expect(compareFromMany(fns as any)(a, b)).toEqual(expected);
  });
});

describe("compareFromManyReversed", () => {
  test.each([
    {
      a: { p1: "a", p2: "b" },
      b: { p1: "b", p2: "a" },
      fns: [
        { compareFn: compareFromProperty("p1"), weight: 2 },
        { compareFn: compareFromProperty("p2"), weight: 1 },
      ],
      expected: +1,
    },
    {
      a: { p1: "a", p2: "b" },
      b: { p1: "b", p2: "a" },
      fns: [
        { compareFn: compareFromProperty("p1"), weight: 1 },
        { compareFn: compareFromProperty("p2"), weight: 2 },
      ],
      expected: -1,
    },
    {
      a: { p1: "", p2: "" },
      b: { p1: "", p2: "" },
      fns: [
        { compareFn: compareFromProperty("p1"), weight: 2 },
        { compareFn: compareFromProperty("p2"), weight: 1 },
      ],
      expected: 0,
    },
    {
      a: { p1: "b", p2: "a" },
      b: { p1: "a", p2: "b" },
      fns: [
        { compareFn: compareFromProperty("p1"), weight: 2 },
        { compareFn: compareFromProperty("p2"), weight: 1 },
      ],
      expected: -1,
    },
    {
      a: { p1: "b", p2: "a" },
      b: { p1: "a", p2: "b" },
      fns: [
        { compareFn: compareFromProperty("p1"), weight: 1 },
        { compareFn: compareFromProperty("p2"), weight: 2 },
      ],
      expected: +1,
    },
  ])("($a, $b) -> $expected", ({ a, b, fns, expected }) => {
    expect(compareFromManyReversed(fns as any)(a, b)).toEqual(expected);
  });
});
