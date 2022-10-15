type SelectOption = {
  label: string;
  value: string;
};

export interface SelectProps {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value?: SelectOption) => void;
}
