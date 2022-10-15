import { Select } from "./Select";

const optionsMock = [
  { label: "Fist", value: "1" },
  { label: "Second", value: "2" },
  { label: "Third", value: "3" },
  { label: "Fourth", value: "4" },
  { label: "Fifth", value: "5" },
];

function App() {
  return <Select options={optionsMock} />;
}

export default App;
