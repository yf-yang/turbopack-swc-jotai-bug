"use client";
import { focusAtom } from "jotai-optics";
import { atom, useAtom } from "jotai";

const baseAtom = atom({ value: 0 });

const derivedAtom = focusAtom(baseAtom, (optics) => optics.prop("value"));

export function TestButton() {
  const [value, setValue] = useAtom(derivedAtom);
  return (
    <button
      onClick={() => {
        setValue((v) => v + 1);
      }}
    >
      {value}
    </button>
  );
}
