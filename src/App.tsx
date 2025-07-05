import { useState, useRef, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import ActionTabs from './components/ActionTabs';
import Spreadsheet from './components/Spreadsheet';
import { initialData, columns } from './data';
import FooterTabs from './components/FooterTabs';

interface RowData {
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

export default function App() {
  const [data, setData] = useState<RowData[]>(initialData);
  const [selectedCell, setSelectedCell] = useState({ row: -1, col: -1 });
  const [editingCell, setEditingCell] = useState({ row: -1, col: -1 });
  const [editValue, setEditValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const cellRefs = useRef<Record<string, HTMLTableCellElement | null>>({});

  const filteredData = data.filter(row => 
    Object.values(row).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    console.log(`Cell clicked: Row ${rowIndex}, Col ${colIndex}`);
    setSelectedCell({ row: rowIndex, col: colIndex });
    setEditingCell({ row: -1, col: -1 });
  };

  const handleCellDoubleClick = (rowIndex: number, colIndex: number) => {
    console.log(`Cell double-clicked: Row ${rowIndex}, Col ${colIndex}`);
    setEditingCell({ row: rowIndex, col: colIndex });
    const columnKey = columns[colIndex].key;
    const currentValue = filteredData[rowIndex][columnKey as keyof RowData];
    setEditValue(currentValue.toString());
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (editingCell.row !== -1) return;

    const { row, col } = selectedCell;
    if (row === -1 || col === -1) return;

    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        if (row > 0) setSelectedCell({ row: row - 1, col });
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (row < filteredData.length - 1) setSelectedCell({ row: row + 1, col });
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (col > 0) setSelectedCell({ row, col: col - 1 });
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (col < columns.length - 1) setSelectedCell({ row, col: col + 1 });
        break;
      case 'Enter':
        e.preventDefault();
        handleCellDoubleClick(row, col);
        break;
      case 'Escape':
        e.preventDefault();
        setSelectedCell({ row: -1, col: -1 });
        break;
    }
  }, [selectedCell, editingCell, filteredData.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleEditSubmit = () => {
    if (editingCell.row !== -1 && editingCell.col !== -1) {
      const newData = [...data];
      const originalRowIndex = data.findIndex(item => item.id === filteredData[editingCell.row].id);
      const columnKey = columns[editingCell.col].key;
      
      newData[originalRowIndex] = { 
        ...newData[originalRowIndex], 
        [columnKey]: columnKey === 'estValue' ? parseInt(editValue) || 0 : editValue 
      };
      
      setData(newData);
      setEditingCell({ row: -1, col: -1 });
      console.log(`Cell updated: ${columnKey} = ${editValue}`);
    }
  };

  const handleEditCancel = () => {
    setEditingCell({ row: -1, col: -1 });
    setEditValue('');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Toolbar />
      <ActionTabs />
      <Spreadsheet 
        data={filteredData}
        columns={columns}
        selectedCell={selectedCell}
        editingCell={editingCell}
        editValue={editValue}
        onCellClick={handleCellClick}
        onCellDoubleClick={handleCellDoubleClick}
        onEditSubmit={handleEditSubmit}
        onEditCancel={handleEditCancel}
        onEditValueChange={setEditValue}
        cellRefs={cellRefs}
      />
      <FooterTabs />
    </div>
  );
}