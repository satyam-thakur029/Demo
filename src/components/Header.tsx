import { Search, MoreHorizontal } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function Header({ searchTerm, onSearchChange }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 4C20.5449 4 22 5.45507 22 7.25V16.75C22 18.5449 20.5449 20 18.75 20H5.25C3.45507 20 2 18.5449 2 16.75V7.25C2 5.45507 3.45507 4 5.25 4H18.75ZM5.25 5.5C4.2835 5.5 3.5 6.2835 3.5 7.25V16.75C3.5 17.7165 4.2835 18.5 5.25 18.5H14.5V5.5H5.25Z" fill="#618666"/>
</svg>

            <span>Workspace</span>
            <span>›</span>
            <span>Folder 2</span>
            <span>›</span>
            <span className="font-medium text-gray-900">Spreadsheet 3</span>
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search within sheet"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>
          <div className="flex items-center space-x-2">
          
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="8" fill="white"/>
<path d="M20 9.99622C24.0499 9.99622 27.3567 13.191 27.4958 17.2453L27.5 17.4962V21.5932L28.88 24.7492C28.949 24.9071 28.9847 25.0776 28.9847 25.25C28.9847 25.9404 28.425 26.5 27.7347 26.5L23 26.5015C23 28.1583 21.6568 29.5015 20 29.5015C18.4023 29.5015 17.0963 28.2526 17.0051 26.6778L16.9995 26.4992L12.2749 26.5C12.1035 26.5 11.934 26.4648 11.7769 26.3965C11.1436 26.1215 10.8533 25.3852 11.1283 24.752L12.5 21.5941V17.4961C12.5006 13.3413 15.8521 9.99622 20 9.99622ZM21.4995 26.4992L18.5 26.5015C18.5 27.3299 19.1716 28.0015 20 28.0015C20.7797 28.0015 21.4204 27.4066 21.4931 26.646L21.4995 26.4992ZM20 11.4962C16.6798 11.4962 14.0005 14.1705 14 17.4962V21.9059L12.656 25H27.3525L26 21.9068L26.0001 17.5091L25.9964 17.2839C25.8853 14.0504 23.2416 11.4962 20 11.4962Z" fill="#121212"/>
<rect x="21" y="1" width="18" height="18" rx="9" fill="#4B6A4F"/>
<rect x="21" y="1" width="18" height="18" rx="9" stroke="white" stroke-width="2"/>
<path d="M27.7 13V12.22C28.3333 11.7667 28.8633 11.3667 29.29 11.02C29.7233 10.6733 30.07 10.3533 30.33 10.06C30.59 9.76667 30.7767 9.49 30.89 9.23C31.01 8.96333 31.07 8.69333 31.07 8.42C31.07 8.06667 30.96 7.78 30.74 7.56C30.52 7.34 30.2133 7.23 29.82 7.23C29.4067 7.23 29.0767 7.37 28.83 7.65C28.59 7.92333 28.4533 8.3 28.42 8.78L27.49 8.35C27.5367 7.93 27.66 7.56667 27.86 7.26C28.06 6.95333 28.33 6.71667 28.67 6.55C29.0167 6.38333 29.4167 6.3 29.87 6.3C30.2433 6.3 30.57 6.35333 30.85 6.46C31.1367 6.56667 31.3767 6.71667 31.57 6.91C31.7633 7.09667 31.91 7.31667 32.01 7.57C32.1167 7.82333 32.17 8.09333 32.17 8.38C32.17 8.8 32.0667 9.20667 31.86 9.6C31.6533 9.98667 31.3267 10.3833 30.88 10.79C30.4333 11.1967 29.8467 11.6333 29.12 12.1V12.12C29.2 12.1067 29.31 12.1 29.45 12.1C29.59 12.0933 29.73 12.09 29.87 12.09C30.01 12.0833 30.1233 12.08 30.21 12.08H32.29V13H27.7Z" fill="#F6F6F6"/>
</svg>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-sm font-medium">JD</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">John Doe</div>
                <div className="text-xs text-gray-500">john.doe...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}