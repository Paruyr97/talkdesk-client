import { filterDataBySearch, normalizedPath } from "./helper";

describe("helper functions test", () => {
  test("filterDataBySearch function", () => {
    expect(filterDataBySearch([], "aaaaa")).toEqual([]);
    expect(filterDataBySearch([{ name: "aaa" }], "aaa")).toEqual([
      { name: "aaa" },
    ]);
  });

  test("normalizedPath function", () => {
    expect(normalizedPath("111%20aaa%202")).toBe("111 aaa 2");
    expect(normalizedPath("")).toBe("");
  });
});
