import React from 'react';

const LeftSidebar = () => {
    return (
                  <div className="lg:w-64 flex-shrink-0">
                        <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-6">
                            <h3 className="font-semibold text-lg mb-5">Categories</h3>
                            
                            <div className="space-y-4">
                                <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 accent-blue-600" defaultChecked />
                                <span className="text-gray-700">All Books</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                                <span className="text-gray-700">Story</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                                <span className="text-gray-700">Tech</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                                <span className="text-gray-700">Science</span>
                                </label>
                            </div>
                        </div>
                  </div>
        
    );
};

export default LeftSidebar;