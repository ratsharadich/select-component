import { useState } from "react";
import { SelectOption } from "./interfaces";
import { Select } from "./Select";

const optionsMock = [
  { label: "Fist", value: "1" },
  { label: "Second", value: "2" },
  { label: "Third", value: "3" },
  { label: "Fourth", value: "4" },
  { label: "Fifth", value: "5" },
];

function App() {
  const [multipleValue, setMultipleValue] = useState<SelectOption[]>([
    optionsMock[0],
  ]);
  const [singularValue, setSungularValue] = useState<SelectOption | undefined>(
    optionsMock[0]
  );

  return (
    <>
      <Select
        multiple
        options={optionsMock}
        value={multipleValue}
        onChange={(option) => setMultipleValue(option)}
      />
      <br />
      <Select
        options={optionsMock}
        value={singularValue}
        onChange={(option) => setSungularValue(option)}
      />
    </>
  );
}

export default App;
