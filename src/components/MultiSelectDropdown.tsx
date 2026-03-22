"use client";

import { useMemo, useState } from "react";

type MultiSelectDropdownProps = {
  id: string;
  label: string;
  options: string[];
  value: string[];
  onChange: (next: string[]) => void;
  placeholder: string;
};

export function MultiSelectDropdown({
  id,
  label,
  options,
  value,
  onChange,
  placeholder,
}: MultiSelectDropdownProps) {
  const [open, setOpen] = useState(false);

  const summary = useMemo(() => {
    if (value.length === 0) return placeholder;
    if (value.length <= 2) return value.join(", ");
    return `${value.slice(0, 2).join(", ")} +${value.length - 2}`;
  }, [placeholder, value]);

  const toggle = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((x) => x !== option));
      return;
    }
    onChange([...value, option]);
  };

  return (
    <div className="relative">
      <label className="st-label" htmlFor={id}>
        {label}
      </label>
      <button
        id={id}
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="st-input flex min-h-11 items-center justify-between text-left"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
      >
        <span className={value.length ? "text-slate-100" : "text-slate-400"}>{summary}</span>
        <span className="text-slate-400">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div
          id={`${id}-panel`}
          className="absolute z-20 mt-2 max-h-72 w-full overflow-auto rounded-xl border border-white/10 bg-slate-900 p-2 shadow-glow"
        >
          {options.map((option) => {
            const active = value.includes(option);
            return (
              <button
                key={option}
                type="button"
                onClick={() => toggle(option)}
                className={`mb-1 w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                  active
                    ? "bg-brand-500/20 text-brand-200"
                    : "text-slate-300 hover:bg-white/10"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

