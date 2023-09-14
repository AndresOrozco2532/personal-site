export interface SelectOption<T> {
  key: string;
  value: T;
  label?: string;
}

export interface SearchOption {
  label: string;
  value: string;
}
