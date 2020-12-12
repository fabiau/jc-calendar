import React, { useEffect } from 'react';
import MonthlyCalendar from './calendar/MonthlyCalendar';

function setNavigationBarHeightCSSVariable() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

function App() {
  useEffect(() => {
    window.addEventListener('resize', setNavigationBarHeightCSSVariable);
    return () => {
      window.removeEventListener('resize', setNavigationBarHeightCSSVariable);
    };
  }, []);

  return (
    <div className="h-screen-nav-fix w-screen font-montserrat overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <MonthlyCalendar />
    </div>
  );
}

export default App;
