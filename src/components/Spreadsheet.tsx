import { ChevronDown } from 'lucide-react';
import SpreadsheetRow from './SpreadsheetRow';

interface Column {
  key: string;
  label: string;
  width: number;
}

interface CellPosition {
  row: number;
  col: number;
}

interface SpreadsheetProps {
  data: any[];
  columns: Column[];
  selectedCell: CellPosition;
  editingCell: CellPosition;
  editValue: string;
  onCellClick: (rowIndex: number, colIndex: number) => void;
  onCellDoubleClick: (rowIndex: number, colIndex: number) => void;
  onEditSubmit: () => void;
  onEditCancel: () => void;
  onEditValueChange: (value: string) => void;
  cellRefs: React.RefObject<any>;
}

export default function Spreadsheet({
  data,
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
}: SpreadsheetProps) {
  return (
    <div className="bg-white overflow-auto">
      <table className="w-full border-collapse">
        <thead className="bg-gray-50 sticky top-0 z-10">
          <tr>
            <th className="w-8 px-4 py-3 text-left text-xs font-medium text-gray-500 border-r border-gray-200 bg-gray-50">
              #
            </th>
            {columns.map((column) => (
              <th
                key={column.key}
                style={{ width: column.width }}
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 border-r border-gray-200 bg-gray-50 relative group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {column.key === 'jobRequest' && <span>📋</span>}
                    {column.key === 'submitted' && <span>📅</span>}
                    {column.key === 'status' && <span>📊</span>}
                    {column.key === 'submitter' && <span>👤</span>}
                    {column.key === 'url' && <span>🌐</span>}
                    {column.key === 'assigned' && <span>👥</span> }
                   
                    <span>{column.label}</span>
                     {column.key === 'plus' && <span></span>}
                  </div>
                  <button 
                    onClick={() => console.log(`Column sort clicked: ${column.label}`)}
                    className=" group-hover:opacity-100 p-1 hover:bg-gray-200 rounded"
                  >
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {data.map((row, rowIndex) => (
            <SpreadsheetRow
              key={row.id}
              row={row}
              rowIndex={rowIndex}
              columns={columns}
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
          
          {/* Empty rows */}
          {Array.from({ length: 15 }, (_, index) => (
            <tr key={`empty-${index}`} className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-400 border-r border-gray-100 bg-gray-50">
                {data.length + index + 1}
              </td>
              {columns.map((column, colIndex) => (
                <td
                  key={`empty-${index}-${column.key}`}
               
                  style={{ width: column.width }}
                  onClick={() => onCellClick(data.length + index, colIndex)}
                >
                 
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}