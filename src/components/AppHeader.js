import React from 'react';
import PlusIcon from './icons/PlusIcon';

function AppHeader() {
  return (
    <div className="flex px-8 py-4 flex-row gap-4 flex-nowrap shadow-lg items-center">
      <div className="w-64">
        <button
          type="button"
          className="uppercase flex flex-row flex-nowrap gap-4 p-3 lg:px-4 lg:py-2 shadow rounded-full lg:rounded text-lg font-medium bg-white hover:bg-gray-200 text-indigo-700 hover:text-indigo-900 transition-colors duration-150"
        >
          <PlusIcon svgClassName="w-6 h-6" />
          <span className="hidden lg:inline">New Reminder</span>
        </button>
      </div>

      <h1 className="flex-grow text-center text-2xl font-medium">
        December 2020
      </h1>

      <div className="w-64" />
    </div>
  );
}

export default AppHeader;
