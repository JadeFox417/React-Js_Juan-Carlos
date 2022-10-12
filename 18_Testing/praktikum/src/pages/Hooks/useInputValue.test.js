import { act, renderHook } from "@testing-library/react-hooks";
import { useInputValue } from "./useInputValue";

describe("when rendered", () => {
  it("returns value", () => {
    const { result } = renderHook(() => useInputValue("react hooks"));

    expect(result.current.value).toEqual("react hooks");
  });

  it("returns innerText", () => {
    const { result } = renderHook(() => useInputValue(""));
    act(() => {
      result.current.onChange({ target: { innerText: "REACT HOOKS" } });
    });

    expect(result.current.value).toEqual("REACT HOOKS");
  });
});

describe("when rerendered", () => {
  it("updates the value", () => {
    const { result, rerender } = renderHook(({ value }) => useInputValue(value), { initialProps: { value: "react hooks" } });
    rerender("Updated!");
    expect(result.current.value).toEqual("react hooks");
  });

  it("updates the innerText", () => {
    const { result, rerender } = renderHook(({ innerText }) => useInputValue(innerText), { initialProps: { innerText: "REACT HOOKS" } });
    rerender("UPDATED!");
    expect(result.current.value).toEqual("REACT HOOKS");
  });
});
