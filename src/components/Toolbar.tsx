import { 
  ChevronDown, 
  Filter, 
  Plus, 
  Download, 
  Upload, 
  EyeOff,
  ArrowUpDown,
  Grid3X3,
  Share
} from 'lucide-react';

export default function Toolbar() {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => console.log('Tool bar clicked')}
            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900"
          >
            <span>Tool bar</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button 
            onClick={() => console.log('Hide fields clicked')}
            className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded"
          >
            <EyeOff className="w-4 h-4" />
            <span>Hide fields</span>
          </button>
          <button 
            onClick={() => console.log('Sort clicked')}
            className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded"
          >
            <ArrowUpDown className="w-4 h-4" />
            <span>Sort</span>
          </button>
          <button 
            onClick={() => console.log('Filter clicked')}
            className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded"
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button 
            onClick={() => console.log('Cell view clicked')}
            className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded"
          >
            <Grid3X3 className="w-4 h-4" />
            <span>Cell view</span>
          </button>
        </div>
        
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => console.log('Import clicked')}
            className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded"
          >
            <Download className="w-4 h-4" />
            <span>Import</span>
          </button>
          <button 
            onClick={() => console.log('Export clicked')}
            className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded"
          >
            <Upload className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button 
            onClick={() => console.log('Share clicked')}
            className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded"
          >
            <Share className="w-4 h-4" />
            <span>Share</span>
          </button>
          <button 
            onClick={() => console.log('New Action clicked')}
            className="flex items-center space-x-2 px-4 py-1.5 bg-[#4B6A4F] text-white text-sm font-medium rounded "
          >
            <Plus className="w-4 h-4" />
            <span>New Action</span>
          </button>
        </div>
      </div>
    </div>
  );
}