import React from 'react';
import { Search, Filter, Trash2 } from 'lucide-react';

const DocumentsFaculty: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header with title and button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-black">Document Management</h2>
        <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded shadow">
          + Add Document
        </button>
      </div>

      {/* Main box */}
      <div className="bg-white border border-blue-400 rounded-lg p-4 w-full shadow">
        {/* Search Bar */}
        <div className="flex items-center gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Table */}
        <table className="w-full text-sm text-left border border-gray-300">
          <thead className="bg-gray-100 text-black font-semibold">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Faculty ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">List of Documents</th>
              <th className="px-4 py-2 border flex justify-between items-center">
                <span>Submission Status</span>
                <Filter size={16} className="ml-2 cursor-pointer" />
              </th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: 1,
                facultyId: '2025-0001-SJSFI',
                name: 'Maria Reyes',
                documents: '5/5',
                status: 'Complete',
                date: '3/10/25',
                statusColor: 'text-green-600',
              },
              {
                id: 2,
                facultyId: '2025-0002-SJSFI',
                name: 'John Dela Cruz',
                documents: '3/5',
                status: 'Incomplete',
                date: '3/10/25',
                statusColor: 'text-gray-700',
              },
              {
                id: 3,
                facultyId: '2025-0003-SJSFI',
                name: 'Angela Santos',
                documents: '0/5',
                status: 'Pending',
                date: '3/10/25',
                statusColor: 'text-red-600',
              },
            ].map((item, index) => (
              <tr key={index} className="text-black text-sm">
                <td className="px-4 py-2 border text-center">{item.id}</td>
                <td className="px-4 py-2 border">{item.facultyId}</td>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">Submitted: {item.documents}</td>
                <td className="px-4 py-2 border">
                  <span className={`${item.statusColor} font-medium`}>{item.status}</span>
                  <div className="text-xs text-gray-500">{item.date}</div>
                </td>
                <td className="px-4 py-2 border flex items-center gap-2 justify-center">
                  <button className="bg-yellow-400 hover:bg-yellow-300 text-black text-xs px-2 py-1 rounded">
                    Remind
                  </button>
                  <Trash2 className="text-gray-600 cursor-pointer" size={16} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentsFaculty;
