export type SelectOption = {
  label: string;
  value: string;
};

type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value?: SelectOption) => void;
};

export type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);
