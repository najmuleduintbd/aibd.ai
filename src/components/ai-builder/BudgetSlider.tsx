"use client";

interface BudgetSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const presets = [
  { label: "Budget", value: 15000 },
  { label: "Mid-Range", value: 50000 },
  { label: "Premium", value: 120000 },
];

export default function BudgetSlider({ value, onChange }: BudgetSliderProps) {
  const formatBDT = (n: number) => "৳" + n.toLocaleString("en-IN");

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-400">৳5,000</span>
        <span className="text-lg font-bold text-cyan-400">{formatBDT(value)}</span>
        <span className="text-sm text-gray-400">৳2,00,000</span>
      </div>
      <input
        type="range"
        min={5000}
        max={200000}
        step={1000}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gray-800 accent-cyan-500
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-950 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-cyan-500/30"
      />
      <div className="flex gap-2 mt-4">
        {presets.map((preset) => (
          <button
            key={preset.label}
            type="button"
            onClick={() => onChange(preset.value)}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              value === preset.value
                ? "bg-cyan-500 text-gray-950"
                : "bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-600 hover:text-gray-300"
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  );
}
