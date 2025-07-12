import { useState } from "react";

function SumFromFile() {
  const [sum, setSum] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;

      try {
        const lines = content.split("\n");
        let total = 0;

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed) continue;

          const [valueStr] = trimmed.split(" ");
          const value = parseFloat(valueStr);

          if (isNaN(value)) {
            throw new Error(`Invalid value on line: "${line}"`);
          }

          total += value;
        }

        setSum(total);
        setError(null);
      } catch (err) {
        setError((err as Error).message);
        setSum(null);
      }
    };

    reader.readAsText(file);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-medium">Sum of values from file</h2>
      <input title="dd" type="file" accept=".txt" onChange={handleFileUpload} />
      {sum !== null && (
        <p>
          <strong className="font-medium">Total sum:</strong> {sum}
        </p>
      )}
      {error && <p className="text-red-500">Error: {error}</p>}
    </div>
  );
}

export default SumFromFile;
