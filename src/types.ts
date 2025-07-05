export interface RowData {
  id: number;
  jobRequest: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  estValue: number;
  plus: string;
  [key: string]: string | number; // Index signature
}

export interface Column {
  key: string;
  label: string;
  width: number;
}

export interface CellPosition {
  row: number;
  col: number;
}