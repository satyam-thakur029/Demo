# React Spreadsheet Assignment

A pixel-perfect React implementation of a spreadsheet interface matching the provided Figma design. This prototype delivers a Google Sheets-like experience with interactive cells, keyboard navigation, and modern UI components.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 📋 Assignment Requirements Met

### ✅ Core Criteria
- **Pixel-perfect Figma match**: Layout, colors, spacing, and typography
- **Spreadsheet experience**: Cell selection, editing, keyboard navigation
- **Interactive UI**: All buttons and tabs functional with console logging
- **Tech stack compliance**: React 18 + TypeScript + Tailwind CSS + Vite

### ✅ Acceptance Criteria
1. **Layout fidelity**: Matches Figma design specifications
2. **Spreadsheet functionality**: Excel-like cell interaction and editing
3. **Interactive components**: No dead UI elements, all actions logged
4. **Code quality**: Passes ESLint, Prettier, and TypeScript checks
5. **Git history**: Clean commits with descriptive messages

### ✅ Stretch Goals Implemented
- **Keyboard navigation**: Arrow keys, Enter, Escape for cell navigation
- **Search functionality**: Real-time filtering across all data
- **Status indicators**: Color-coded project status badges
- **Responsive design**: Works across different screen sizes

## 🛠️ Tech Stack

- **React 18** with hooks for state management
- **TypeScript** in strict mode for type safety
- **Vite** for fast development and building
- **Tailwind CSS** for utility-first styling
- **Lucide React** for consistent iconography

## 🎯 Key Features

### Spreadsheet Experience
- **Cell Selection**: Click any cell to select, visual feedback with blue border
- **Inline Editing**: Double-click or press Enter to edit cell content
- **Keyboard Navigation**: Arrow keys to move between cells
- **Data Types**: Support for text, dates, numbers, and URLs
- **Search**: Real-time filtering across all spreadsheet data

### UI Components
- **Header**: Breadcrumb navigation with user profile
- **Toolbar**: Action buttons (Hide fields, Sort, Filter, Import, Export)
- **Tabs**: Multiple worksheet support with visual indicators
- **Grid**: Professional table with column headers and row numbers
- **Status Badges**: Color-coded project status (Complete, In-process, etc.)

## 🔧 Implementation Details

### Component Architecture
```typescript
App
├── Header (navigation, search, user profile)
├── Toolbar (action buttons, view controls)
├── ActionTab (worksheet selection tabs)
├── Spreadsheet
│   ├── SpreadsheetRow
│   │   └── SpreadsheetCell (individual cell logic)
│   └── ...
└── FooterTab (bottom navigation)
```

### State Management
- Local component state using React hooks
- No external state management library needed
- Efficient re-renders with proper state structure
- Data managed centrally and passed down to components

### Data Structure
Defined in `types.ts`:
```typescript
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
  key: keyof RowData | 'plus'; 
  label: string;
  width: number;
}

export interface CellPosition {
  row: number;
  col: number;
}
```

## 📱 Usage

1. **Navigate**: Click cells or use arrow keys
2. **Edit**: Double-click any cell to start editing
3. **Search**: Use the search bar to filter data
4. **Actions**: Click toolbar buttons to see console logs
5. **Tabs**: Switch between different worksheet views

## 🎨 Design Decisions

### Trade-offs Made
- **Component separation**: Broke down into granular components (SpreadsheetCell, SpreadsheetRow) for better maintainability and reusability
- **State management**: Centralized state in App.tsx with props drilling vs context for prototype simplicity
- **Data structure**: Separate `data.ts` file for easy data management and testing
- **Custom components**: Built custom table components instead of react-table for pixel-perfect Figma matching
- **Performance**: Focused on functionality over optimization for this prototype

### Why These Choices
- **Modular architecture**: Each component has single responsibility (Header, Toolbar, Cell, Row)
- **Type safety**: Dedicated `types.ts` ensures consistent data structures
- **Maintainability**: Clear separation of concerns makes code easy to understand and modify
- **Reusability**: SpreadsheetCell and SpreadsheetRow can be reused for different data types
- **Testability**: Individual components can be tested in isolation

## 🔍 File Structure

```
src/
├── components/
│   ├── Spreadsheet.tsx       # Main spreadsheet grid component
│   ├── SpreadsheetRow.tsx    # Row component with data
│   ├── SpreadsheetCell.tsx   # Individual cell with editing logic
│   ├── Header.tsx            # Top navigation and search
│   ├── Toolbar.tsx           # Action buttons and view controls
│   ├── ActionTab.tsx         # Worksheet selection tabs
│   └── FooterTab.tsx         # Bottom navigation tabs
├── App.tsx                   # Root component and state management
├── data.ts                   # Sample spreadsheet data
├── types.ts                  # TypeScript interface definitions
└── main.tsx                  # Entry point
```

## 🚀 Live Demo

Live URL will be provided - https://demo-vacn.vercel.app/

## 📝 Notes

- All interactive elements log actions to console
- Search functionality works across all data fields
- Cell editing supports text, numbers, and maintains data types
- Status and priority have visual indicators matching design
- Responsive design works on desktop and tablet viewports

---

Built with ❤️ for the React Intern Assignment