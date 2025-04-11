import React, { useState } from 'react';

const AttendanceContent: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="text-black p-4 min-h-screen">
            {/* Top Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Schedule Management</h1>
                <button 
                    onClick={handleOpenModal}
                    className="bg-[#800000] hover:bg-red-800 text-white px-4 py-2 rounded flex items-center"
                >
                    <i className="fas fa-plus mr-2"></i>
                    Add User
                </button>
            </div>

            {/* Big Container */}
            <div className="bg-white border-2 border-red-500 p-4 rounded-lg h-[75vh] flex flex-col overflow-auto">
                {/* Search Bar */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Table */}
                <div className="overflow-auto flex-1">
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-2 border-b">Image</th>
                                <th className="p-2 border-b">Name</th>
                                <th className="p-2 border-b">Subject</th>
                                <th className="p-2 border-b">Class and Section</th>
                                <th className="p-2 border-b">Day</th>
                                <th className="p-2 border-b">Time</th>
                                <th className="p-2 border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50">
                                <td className="p-2 border-b">
                                    <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                                </td>
                                <td className="p-2 border-b">John Doe</td>
                                <td className="p-2 border-b">Mathematics</td>
                                <td className="p-2 border-b">Grade 9 - A</td>
                                <td className="p-2 border-b">Monday</td>
                                <td className="p-2 border-b">10:00 AM</td>
                                <td className="p-2 border-b">
                                    <button className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-sm">Edit</button>
                                    <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm ml-2">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg w-1/2 p-6 relative">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-[#800000]">Add User</h2>
                            <button 
                                onClick={handleCloseModal}
                                className="text-gray-500 hover:text-gray-700 text-3xl font-bold"
                            >
                                &times;
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="space-y-6">
                            <div className="flex space-x-4">
                                <div className="flex-1 pb-6">
                                    <label className="block mb-1 font-semibold">Name</label>
                                    <select className="w-full border border-gray-300 rounded p-2">
                                        <option value="">Select Name</option>
                                        <option value="John Doe">John Doe</option>
                                        <option value="Jane Smith">Jane Smith</option>
                                    </select>
                                </div>
                                <div className="flex-1 pb-6">
                                    <label className="block mb-1 font-semibold">Class and Section</label>
                                    <select className="w-full border border-gray-300 rounded p-2">
                                        <option value="">Select Class & Section</option>
                                        <option value="Grade 9 - A">Grade 9 - A</option>
                                        <option value="Grade 10 - B">Grade 10 - B</option>
                                    </select>
                                </div>
                                <div className="flex-1 pb-6">
                                    <label className="block mb-1 font-semibold">Subject</label>
                                    <select className="w-full border border-gray-300 rounded p-2">
                                        <option value="">Select Subject</option>
                                        <option value="Mathematics">Mathematics</option>
                                        <option value="Science">Science</option>
                                    </select>
                                </div>
                            </div>
                            <label className="block mb-1 font-semibold">Day and Time</label>
                            {/* Days and Time Pickers */}
                            <div className="grid grid-cols-2 gap-6">
                           
                                <div className="space-y-4">
                                    {['Monday', 'Tuesday', 'Wednesday'].map((day) => (
                                        <div key={day} className="flex items-center space-x-2">
                                            <input type="checkbox" id={day} className="h-4 w-4" />
                                            <label htmlFor={day} className="w-24">{day}</label>
                                            <input type="time" className="border border-gray-300 rounded p-1 w-32" />
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    {['Thursday', 'Friday', 'Saturday'].map((day) => (
                                        <div key={day} className="flex items-center space-x-2">
                                            <input type="checkbox" id={day} className="h-4 w-4" />
                                            <label htmlFor={day} className="w-24">{day}</label>
                                            <input type="time" className="border border-gray-300 rounded p-1 w-32" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Save Button */}
                        <div className="flex justify-end mt-8">
                            <button
                                onClick={handleCloseModal}
                                className="bg-[#800000] hover:bg-red-800 text-white px-6 py-2 rounded"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AttendanceContent;
