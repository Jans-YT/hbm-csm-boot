import React, { useState } from 'react';

function Side() {
  const [menus, setMenus] = useState(['Dashboard', 'Profile', 'Settings']);
  const [newMenu, setNewMenu] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState('');

  const handleAddMenu = () => {
    if (newMenu.trim() !== '') {
      setMenus([...menus, newMenu]);
      setNewMenu('');
    }
  };

  const handleDeleteMenu = (index) => {
    const updatedMenus = [...menus];
    updatedMenus.splice(index, 1);
    setMenus(updatedMenus);
  };

  const handleEditMenu = (index) => {
    setEditIndex(index);
    setEditValue(menus[index]);
  };

  const handleSaveEdit = () => {
    if (editValue.trim() !== '') {
      const updatedMenus = [...menus];
      updatedMenus[editIndex] = editValue;
      setMenus(updatedMenus);
      setEditIndex(-1);
      setEditValue('');
    }
  };

  return (
    <div className="flex h-screen bg-gray-800">
      <div className="flex flex-col w-64">
        {/* Sidebar header */}
        <div className="flex items-center justify-center h-16 bg-gray-900 text-white">
          Sidebar
        </div>

        {/* Sidebar content */}
        <div className="flex flex-col flex-grow p-4 overflow-y-auto">
          {/* Menu items */}
          {menus.map((menu, index) => (
            <div key={index} className="flex justify-between items-center py-2 text-white hover:bg-gray-700 cursor-pointer">
              {editIndex === index ? (
                <input
                  type="text"
                  className="flex-grow px-2 py-1 mr-2 bg-gray-700 text-white focus:outline-none"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
              ) : (
                <span>{menu}</span>
              )}
              <div>
                {editIndex === index ? (
                  <button
                    className="mr-2 focus:outline-none"
                    onClick={handleSaveEdit}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L4.22 10.28a.75.75 0 011.06-1.06L6 11.94l6.72-6.72a.75.75 0 011.06 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                ) : (
                  <button
                    className="mr-2 focus:outline-none"
                    onClick={() => handleEditMenu(index)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.75 4.5a.75.75 0 00-1.5 0v10.5c0 .414.336.75.75.75h10.5a.75.75 0 000-1.5H3.75V4.5zM16.25 4a.75.75 0 00-.75.75v10.5a.75.75 0 001.5 0V4.75a.75.75 0 00-.75-.75zM6 13.44l-1.47.73a.75.75 0 00-.28 1.27l.96.96a.75.75 0 001.06 0l.96-.96a.75.75 0 00-.28-1.27L6 13.44zm5.97-7.44l-1.06 1.06 1.44 1.44-4.07 4.07a.75.75 0 01-.53.22H5.75a.75.75 0 01-.75-.75v-1.61c0-.414.336-.75.75-.75h1.61c.086 0 .168-.018.247-.051l4.07-4.07 1.44 1.44 1.06-1.06a.75.75 0 000-1.06l-1.91-1.91a.75.75 0 00-1.06 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
                <button
                  className="focus:outline-none"
                  onClick={() => handleDeleteMenu(index)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}

          {/* Add menu button */}
          <div className="flex items-center mt-4">
            <input
              type="text"
              className="flex-grow px-2 py-1 mr-2 bg-gray-700 text-white focus:outline-none"
              placeholder="New Menu"
              value={newMenu}
              onChange={(e) => setNewMenu(e.target.value)}
            />
            <button
              className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full focus:outline-none"
              onClick={handleAddMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9V6a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow bg-gray-200">
      </div>
    </div>
  );
}

export default Side;
