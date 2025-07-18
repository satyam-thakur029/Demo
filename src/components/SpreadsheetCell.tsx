import React from 'react';
import type { RowData, Column, CellPosition } from '../types';

interface SpreadsheetCellProps {
  row: RowData;
  rowIndex: number;
  column: Column;
  colIndex: number;
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

export default function SpreadsheetCell({
  row,
  rowIndex,
  column,
  colIndex,
  selectedCell,
  editingCell,
  editValue,
  onCellClick,
  onCellDoubleClick,
  onEditSubmit,
  onEditCancel,
  onEditValueChange,
  cellRefs
}: SpreadsheetCellProps) {
  const isSelected = selectedCell.row === rowIndex && selectedCell.col === colIndex;
  const isEditing = editingCell.row === rowIndex && editingCell.col === colIndex;
  const cellValue = row[column.key as keyof RowData];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Complete': return 'bg-green-100 text-green-800 border border-green-200';
      case 'In-process': return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
      case 'Need to start': return 'bg-blue-100 text-blue-800 border border-blue-200';
      case 'Blocked': return 'bg-red-100 text-red-800 border border-red-200';
      default: return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-600 font-semibold';
      case 'Medium': return 'text-orange-600 font-semibold';
      case 'Low': return 'text-blue-600 font-semibold';
      default: return 'text-gray-600';
    }
  };

  const renderCellContent = () => {
    if (column.key === 'actions') {
      return (
        <div className="flex space-x-2">
          <button className="px-2 py-1 text-xs bg-green-50 text-green-600 rounded hover:bg-green-100">
            ABC
          </button>
          <button className="px-2 py-1 text-xs bg-purple-50 text-purple-600 rounded hover:bg-purple-100">
            Answer a question
          </button>
          <button className="px-2 py-1 text-xs bg-orange-50 text-orange-600 rounded hover:bg-orange-100">
            Extract
          </button>
        </div>
      );
    }

    if (isEditing) {
      return (
        <input
          type="text"
          value={editValue}
          onChange={(e) => onEditValueChange(e.target.value)}
          onBlur={onEditSubmit}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onEditSubmit();
            else if (e.key === 'Escape') onEditCancel();
          }}
          className="w-full bg-transparent border-none outline-none"
          autoFocus
        />
      );
    }

    return (
      <span className={`${
        column.key === 'status' ? `px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cellValue as string)}` :
        column.key === 'priority' ? getPriorityColor(cellValue as string) :
        column.key === 'estValue' ? 'font-medium text-gray-900' :
        column.key === 'url' ? 'text-blue-600 hover:underline cursor-pointer' :
        'text-gray-900'
      }`}>
        {column.key === 'estValue' ? `${(Number(cellValue) / 100000).toFixed(3)} ₹` :
         column.key === 'url' ? cellValue as string :
         cellValue as string}
      </span>
    );
  };

  return (
    <td
      ref={el => {
        if (cellRefs.current) {
          cellRefs.current[`${rowIndex}-${colIndex}`] = el;
        }
      }}
      className={`px-4 py-3 text-sm border-r border-gray-100 cursor-cell relative ${
        isSelected ? 'bg-blue-50 ring-2 ring-blue-500 ring-inset' : ''
      }`}
      style={{ width: column.width }}
      onClick={() => onCellClick(rowIndex, colIndex)}
      onDoubleClick={() => onCellDoubleClick(rowIndex, colIndex)}
    >
      {renderCellContent()}
    </td>
  );
}