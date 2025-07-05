import React from 'react';
import SpreadsheetCell from './SpreadsheetCell';

interface Column {
  key: string;
  label: string;
  width: number;
}

interface RowData {
  id: number;
  jobRequest?: string;
  submitted?: string;
  status?: string;
  submitter?: string;
  url?: string;
  assigned?: string;
  priority?: string;
  dueDate?: string;
  estValue?: number;
  plus?: string;
  [key: string]: any; // For any additional dynamic properties
}

interface CellPosition {
  row: number;
  col: number;
}

interface SpreadsheetRowProps {
  row: RowData;
  rowIndex: number;
  columns: Column[];
  selectedCell: CellPosition;
  editingCell: CellPosition;
  editValue: string;
  onCellClick: (rowIndex: number, colIndex: number) => void;
  onCellDoubleClick: (rowIndex: number, colIndex: number) => void;
  onEditSubmit: () => void;
  onEditCancel: () => void;
  onEditValueChange: (value: string) => void;
  cellRefs: React.RefObject<Record<string, HTMLTableCellElement | null>>;
}

export default function SpreadsheetRow({
  row,
  rowIndex,
  columns,
  selectedCell,
  editingCell,
  editValue,
  onCellClick,
  onCellDoubleClick,
  onEditSubmit,
  onEditCancel,
  onEditValueChange,
  cellRefs
}: SpreadsheetRowProps) {
  return (
    <tr key={row.id} className="hover:bg-gray-50">
      <td className="px-4 py-3 text-sm text-gray-500 border-r border-gray-100 bg-gray-50 font-medium">
        {rowIndex + 1}
      </td>
      {columns.map((column, colIndex) => (
        <SpreadsheetCell
          key={`${row.id}-${column.key}`}
          row={row}
          rowIndex={rowIndex}
          column={column}
          colIndex={colIndex}
          selectedCell={selectedCell}
          editingCell={editingCell}
          editValue={editValue}
          onCellClick={onCellClick}
          onCellDoubleClick={onCellDoubleClick}
          onEditSubmit={onEditSubmit}
          onEditCancel={onEditCancel}
          onEditValueChange={onEditValueChange}
          cellRefs={cellRefs}
        />
      ))}
    </tr>
  );
}